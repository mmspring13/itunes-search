'use client';

import { ApiSearchResponse, BaseMediaProps } from '@/api/types';
import { isValidUrl } from '@/lib/is-valid-url';
import {
  Table,
  TableColumn,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Link,
} from '@nextui-org/react';
import { ChevronDownIcon, Play } from 'lucide-react';
import Image from 'next/image';
import { map, pick, prop } from 'ramda';
import { use, useMemo, useState } from 'react';
import { MediaPlayerModal } from '../medial-player-modal';
import './style.css';

export const MediaTableList = ({
  fetchData,
}: {
  fetchData: Promise<ApiSearchResponse>;
}) => {
  const { results: data, resultCount: count } =
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
      return Object.keys(data[0]).map((key) => ({ key }));
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

  if (!data?.length) return null;

  return (
    <Table
      classNames={{
        base: 'MediaListTable h-full max-w-full overflow-auto mt-2',
        table: 'h-full',
      }}
      topContentPlacement='outside'
      topContent={
        <div className='flex flex-row items-center justify-end space-x-2 pt-2'>
          {Boolean(count) && <span>Result count {count}</span>}
          <Dropdown>
            <DropdownTrigger className='flex'>
              <Button
                endContent={<ChevronDownIcon className='text-small' />}
                size='sm'
                variant='flat'
              >
                Columns ({visibleColumns.length})
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
              onSelectionChange={(value) => {
                setVisibleColumns(Array.from(value) as string[]);
              }}
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
                const text = prop(
                  column,
                  item as { [k: typeof column]: string }
                );
                if (typeof column !== 'string' || !text) {
                  return <TableCell>-</TableCell>;
                }
                let type: 'text' | 'image' | 'link' = 'text';
                const textClassName =
                  'inline-block max-w-36 overflow-hidden text-ellipsis';
                const cellClassName = 'min-w-40';
                // @todo check image by mime type
                if (column.includes('artworkUrl')) {
                  type = 'image';
                } else if (isValidUrl(text)) {
                  type = 'link';
                }

                if (column === 'previewUrl' && text?.startsWith('http')) {
                  return (
                    <TableCell className={cellClassName}>
                      <MediaPlayerModal mediaUrl={text}>
                        {(onOpen) => (
                          <Button type='button' onPress={onOpen} size='sm'>
                            <Play />
                            <span className={textClassName}>{text}</span>
                          </Button>
                        )}
                      </MediaPlayerModal>
                    </TableCell>
                  );
                }

                if (type === 'image') {
                  return (
                    <TableCell className={cellClassName}>
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
                    <TableCell className={cellClassName}>
                      <Link
                        href={text}
                        className={textClassName}
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        {text}
                      </Link>
                    </TableCell>
                  );
                }

                return (
                  <TableCell className={cellClassName}>
                    <Tooltip
                      content={text}
                      classNames={{
                        base: 'max-w-80',
                      }}
                    >
                      <span className='line-clamp-4 w-full'>{text || '-'}</span>
                    </Tooltip>
                  </TableCell>
                );
              }}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
};
