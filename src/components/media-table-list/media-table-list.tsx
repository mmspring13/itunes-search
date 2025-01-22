'use client';

import { ItunesResponse, ItunesResponseItem } from '@/api/types';
import { intlFormat } from 'date-fns';
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
import { ChevronDownIcon, FileJson, Play } from 'lucide-react';
import Image from 'next/image';
import { map, pick, prop } from 'ramda';
import { lazy, use, useMemo, useState } from 'react';
import { MediaPlayerModal } from '../medial-player-modal';
import './style.css';
import { isValidDate } from '@/lib/is-valid-date';

const ResponseModal = lazy(() => import('../response-modal/response-modal'));

export const MediaTableList = ({
  fetchData,
  url,
}: {
  fetchData: Promise<ItunesResponse>;
  url?: string;
}) => {
  const fetchDataResponse = use(fetchData);

  const { data, count } = useMemo(() => {
    if (fetchDataResponse) {
      return {
        data: fetchDataResponse.results,
        count: fetchDataResponse.resultCount,
      };
    }
    return { data: [], count: 0 };
  }, [fetchDataResponse]);

  const [visibleColumns, setVisibleColumns] = useState([
    'artworkUrl100',
    'trackName',
    'previewUrl',
    'releaseDate',
    'artistName',
    'collectionName',
    'wrapperType',
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

  const formattedData: Partial<ItunesResponseItem>[] = useMemo(() => {
    if (data?.length) {
      return map(pick(visibleColumns), data);
    }
    return [];
  }, [visibleColumns, data]);

  return (
    <Table
      classNames={{
        base: 'MediaListTable h-full max-w-full overflow-auto mt-2',
        table: 'h-full',
      }}
      aria-labelledby='media table'
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
                Columns {Boolean(count) && `(${visibleColumns.length})`}
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

          {url && (
            <ResponseModal data={fetchDataResponse}>
              {(_, setOpen) => (
                <Button size='sm' onPress={() => setOpen(true)} variant='flat'>
                  <FileJson />
                </Button>
              )}
            </ResponseModal>
          )}
        </div>
      }
    >
      <TableHeader columns={tableColumns}>
        {(column) => (
          <TableColumn key={column.key}>
            <span className='text-medium font-bold'>{column.key}</span>
          </TableColumn>
        )}
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
                let type: 'date' | 'text' | 'image' | 'link' = 'text';
                const textClassName =
                  'inline-block max-w-36 overflow-hidden text-ellipsis';
                const cellClassName = 'min-w-40';
                // @todo check image by mime type
                if (column.includes('artworkUrl')) {
                  type = 'image';
                } else if (isValidUrl(text)) {
                  type = 'link';
                } else if (isValidDate(text)) {
                  type = 'date';
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
                          className='object-scale-down'
                          fill
                          priority={false}
                          sizes='100%'
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

                if (type === 'date') {
                  return (
                    <TableCell className={cellClassName}>
                      <span className='whitespace-nowrap text-nowrap'>
                        {intlFormat(
                          new Date(text),
                          {
                            dateStyle: 'full',
                            timeStyle: 'long',
                            timeZone: 'UTC',
                          },
                          { locale: 'en-GB' }
                        )}
                      </span>
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
