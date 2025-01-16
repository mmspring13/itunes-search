'use client';

import { countryIso2 } from '@/lib/countries';
import { Form, Input, Select, SelectItem } from '@nextui-org/react';
import { useEffect, useMemo, useState } from 'react';
import { split, omit, uniq, flatten, values, pick } from 'ramda';
import { constructAttributes, constructEntities, MediaType } from '@/api/types';
import { useRouter, useSearchParams } from 'next/navigation';
import { FilterItemName } from './types';
import useDebounce from '@/hooks/use-debounce';
import { useSearchQuery } from '@/hooks';
import qs from 'qs';

export const AppSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [newQuery, setNewQuery] = useState<string>(params.toString());

  const { term, country, media, entity, attribute } = useSearchQuery(newQuery);
  const debouncedNewQuery = useDebounce(newQuery, 960);

  const changeSearchParam = (
    name: FilterItemName,
    value: string | string[]
  ) => {
    let newParams = qs.parse(params.toString());
    if (!value || !value.length || !value[0].length) {
      newParams = omit([name], newParams);
    } else {
      newParams[name] = value;
    }
    const str = qs.stringify(newParams, { arrayFormat: 'repeat' });
    setNewQuery(str);
  };

  const availableMediaTypes = useMemo<MediaType[]>(
    () => [
      'movie',
      'podcast',
      'music',
      'musicVideo',
      'audiobook',
      'shortFilm',
      'tvShow',
      'software',
      'ebook',
    ],
    []
  );

  const availableEntities = useMemo<string[]>(() => {
    if (media?.length) {
      return uniq(
        flatten(values(pick(media as MediaType[], constructEntities)))
      );
    }
    return [];
  }, [media]);

  const availableAttributes = useMemo<string[]>(() => {
    if (media?.length) {
      return uniq(
        flatten(values(pick(media as MediaType[], constructAttributes)))
      );
    }
    return [];
  }, [media]);

  useEffect(() => {
    if (debouncedNewQuery) {
      router.push(`?${debouncedNewQuery}`);
    } else {
      router.push('/');
    }
  }, [debouncedNewQuery, router]);

  useEffect(() => {
    setNewQuery(params.toString());
  }, [params]);

  return (
    <Form
      className='grid w-full grid-cols-1 items-center gap-2 md:grid-cols-2'
      role='search'
    >
      <Input
        type='text'
        size='sm'
        placeholder='Star Wars'
        className='text-slate-800 md:col-span-2'
        name='term'
        value={term ? String(term) : ''}
        onChange={(e) => changeSearchParam('term', e.target.value)}
        label='Search string'
      />
      <Select
        size='sm'
        label='Country'
        onChange={(e) =>
          changeSearchParam('country', split(',', e.target.value))
        }
        name='country'
        selectionMode='multiple'
        selectedKeys={country}
        defaultSelectedKeys={country}
      >
        {Object.keys(countryIso2).map((code) => (
          <SelectItem key={code} value={code}>
            {countryIso2[code]}
          </SelectItem>
        ))}
      </Select>
      <Select
        size='sm'
        label='Media type'
        name='media'
        onChange={(e) => changeSearchParam('media', split(',', e.target.value))}
        selectionMode='multiple'
        defaultSelectedKeys={media}
        selectedKeys={media}
      >
        {availableMediaTypes.map((type) => (
          <SelectItem key={type} value={type}>
            {type}
          </SelectItem>
        ))}
      </Select>
      {Boolean(availableEntities.length) && (
        <Select
          size='sm'
          label='Entity'
          name='entity'
          onChange={(e) =>
            changeSearchParam('entity', split(',', e.target.value))
          }
          selectionMode='multiple'
          defaultSelectedKeys={entity}
          selectedKeys={entity}
        >
          {availableEntities.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </Select>
      )}
      {Boolean(availableAttributes.length) && (
        <Select
          size='sm'
          label='Attribute'
          name='attribute'
          onChange={(e) =>
            changeSearchParam('attribute', split(',', e.target.value))
          }
          selectionMode='multiple'
          defaultSelectedKeys={attribute}
          selectedKeys={attribute}
        >
          {availableAttributes.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </Select>
      )}
    </Form>
  );
};
