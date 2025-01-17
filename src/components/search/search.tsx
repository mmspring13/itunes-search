'use client';

import { countryIso2 } from '@/lib/countries';
import { Form, Input, Select, SelectItem } from '@nextui-org/react';
import { useMemo } from 'react';
import { split, omit, uniq, flatten, values, pick } from 'ramda';
import { constructAttributes, constructEntities, MediaType } from '@/api/types';
import { FilterItemName } from './types';
import { useItunesQuery } from '@/hooks';
import qs from 'qs';

export type AppSearchProps = {
  onChange(v: string): void;
  value?: string;
};

export const AppSearch = ({ onChange, value = '' }: AppSearchProps) => {
  const { term, country, media, entity, attribute } = useItunesQuery(value);

  const changeSearchParam = (
    name: FilterItemName,
    newValue: string | string[]
  ) => {
    let newParams = qs.parse(value);
    if (!newValue || !newValue.length || !newValue[0].length) {
      newParams = omit([name], newParams);
    } else {
      newParams[name] = newValue;
    }
    const str = qs.stringify(newParams, { arrayFormat: 'repeat' });
    onChange(str);
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
