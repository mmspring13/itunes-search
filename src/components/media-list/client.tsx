'use client';

import { ApiSearchResponse, BaseMediaProps } from '@/api/types';
import { isValidUrl } from '@/lib/is-valid-url';
import {
  Table,
  TableColumn,
  TableHeader,
  Alert,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import { ChevronDownIcon, Play } from 'lucide-react';
import Image from 'next/image';
import { keys, map, nth, pick, prop } from 'ramda';
import { use, useMemo, useState } from 'react';
import { MediaPlayerModal } from '../medial-player-modal';
import './style.css';

export const MediaListAlert = ({ message }: { message: string }) => {
  return (
    <Alert
      classNames={{ mainWrapper: 'overflow-hidden' }}
      color='danger'
      title={message}
    />
  );
};

export type MediaListTableProps = {
  fetchData: Promise<ApiSearchResponse>;
};

export const MediaListTable = ({ fetchData }: MediaListTableProps) => {
  const { results: data, resultsCount: count } =
    use<ApiSearchResponse>(fetchData);
  const [visibleColumns, setVisibleColumns] = useState([
    'wrapperType',
    'trackName',
    'collectionName',
    'artistName',
    'previewUrl',
    'artworkUrl100',
    'releaseDate',
  ]);

  const allColumns = useMemo(() => {
    if (data?.length) {
      return map((key) => ({ key: key }), keys(nth(0, data) || {}));
    }
    return [];
  }, [data]);

  const tableColumns = useMemo(() => {
    return visibleColumns.map((key) => ({ key }));
  }, [visibleColumns]);

  const formattedData: Partial<BaseMediaProps>[] = useMemo(() => {
    if (data?.length) {
      return map(pick(visibleColumns), data);
    }
    return [];
  }, [visibleColumns, data]);

  return (
    <Table
      classNames={{
        base: 'MediaListTable h-full max-w-full overflow-auto mt-4',
        table: 'h-full',
      }}
      topContentPlacement='outside'
      topContent={
        <div className='flex flex-row items-center justify-end space-x-2'>
          {Boolean(count) && <span>Result count {count}</span>}
          <Dropdown>
            <DropdownTrigger className='flex'>
              <Button
                endContent={<ChevronDownIcon className='text-small' />}
                size='sm'
                variant='flat'
              >
                Columns
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label='Table Columns'
              classNames={{
                base: 'h-96 overflow-auto',
              }}
              closeOnSelect={false}
              selectedKeys={visibleColumns}
              selectionMode='multiple'
              onSelectionChange={(value) =>
                setVisibleColumns(Array.from(value) as string[])
              }
            >
              {allColumns.map((column) => (
                <DropdownItem key={column.key} className='capitalize'>
                  {column.key}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      }
    >
      <TableHeader columns={tableColumns}>
        {(column) => <TableColumn key={column.key}>{column.key}</TableColumn>}
      </TableHeader>
      <TableBody items={formattedData}>
        {(item) => {
          return (
            <TableRow key={JSON.stringify(item)}>
              {(column) => {
                if (typeof column !== 'string') {
                  return <TableCell>-</TableCell>;
                }
                const text = prop(
                  column,
                  item as { [k: typeof column]: string }
                );
                let type: 'text' | 'image' | 'link' = 'text';
                const textClassName =
                  'overflow-ellipsis whitespace-nowrap max-w-40 overflow-hidden inline-block';
                if (column.includes('artworkUrl')) {
                  type = 'image';
                } else if (isValidUrl(text)) {
                  type = 'link';
                }

                if (column === 'previewUrl') {
                  return (
                    <TableCell>
                      <MediaPlayerModal mediaUrl={text}>
                        {(onOpen) => (
                          <Tooltip content={text}>
                            <Button type='button' onPress={onOpen} size='sm'>
                              <Play />
                              <span className={textClassName}>{text}</span>
                            </Button>
                          </Tooltip>
                        )}
                      </MediaPlayerModal>
                    </TableCell>
                  );
                }

                if (type === 'image') {
                  return (
                    <TableCell>
                      <div className='h-full max-w-40'>
                        <Image
                          alt='media-image'
                          src={text}
                          className='object-contain'
                          fill
                        />
                      </div>
                    </TableCell>
                  );
                }

                if (type === 'link') {
                  return (
                    <TableCell>
                      <Tooltip content={text}>
                        <a
                          href={text}
                          className={textClassName}
                          rel='noopener noreferrer'
                          target='_blank'
                        >
                          {text}
                        </a>
                      </Tooltip>
                    </TableCell>
                  );
                }

                return (
                  <TableCell>
                    <Tooltip content={text}>
                      <span className={textClassName}>{text || '-'}</span>
                    </Tooltip>
                  </TableCell>
                );
                // return <MediaListTableCell text={text} type={type} />
              }}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
};
