'use client';

import { countryIso2 } from "@/lib/countries";
import { Button, Form, Input, Select, SelectItem } from "@nextui-org/react";
import { FormEventHandler, useEffect, useMemo, useState } from "react";
import { split, omit, uniq, flatten, values, pick } from "ramda";
import { constructAttributes, constructEntities, MediaType } from "@/api/types";
import { useRouter, useSearchParams } from "next/navigation";
import { FilterItemName } from "./types";
import useDebounce from "@/hooks/use-debounce";
import { useSearchQuery } from "@/hooks";
import qs from "qs";

export const AppSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [newQuery, setNewQuery] = useState(params.toString());

  const {
    term,
    country,
    media,
    entity,
    attribute
  } = useSearchQuery(newQuery);
  const debouncedNewQuery = useDebounce(newQuery, 400);

  const submit: FormEventHandler<HTMLFormElement>  = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log('data', data.get('term'))
  };
  
  const changeSearchParam = (name: FilterItemName, value: string | string[]) => {
    let newParams = qs.parse(params.toString());
    if (!value || !value.length || !value[0].length) {
      newParams = omit([name], newParams);
    } else {
      newParams[name] = value;
    }
    const str = qs.stringify(newParams, { arrayFormat: 'repeat' });
    setNewQuery(str);
  };


  const availableMediaTypes = useMemo<MediaType[]>(() => [
    "movie",
    "podcast",
    "music",
    "musicVideo",
    "audiobook",
    "shortFilm",
    "tvShow",
    "software",
    "ebook",
  ], []);

  const availableEntities = useMemo<string[]>(() => {
    if (media?.length) {
      return uniq(flatten(values(pick(media as MediaType[], constructEntities))))
    }
    return [];
  }, [media]);

  const availableAttributes = useMemo<string[]>(() => {
    if (media?.length) {
      return uniq(flatten(values(pick(media as MediaType[], constructAttributes))))
    }
    return [];
  }, [media]);

  useEffect(() => {
    router.push(`?${debouncedNewQuery}`);
  }, [debouncedNewQuery, router]);

  return (
    <Form
      className="grid md:grid-cols-2 gap-2 w-full items-center grid-cols-1"
      role="search"
      onSubmit={submit}
    >
      <Input
        type='text'
        size="sm"
        placeholder='Star Wars'
        className="text-slate-800"
        name="term"
        value={term ? String(term) : ''}
        onChange={(e) => changeSearchParam('term', e.target.value)}
        label="Search string"
      />
      <Select
        size="sm"
        label="Country"
        value={['AS', 'AO']}
        onChange={(e) => changeSearchParam('country', split(',', e.target.value))}
        name="country"
        selectionMode="multiple"
        defaultSelectedKeys={country}
      >
        {Object.keys(countryIso2).map((code) => (
          <SelectItem key={code} value={code}>
            {countryIso2[code]}
          </SelectItem>
        ))}
      </Select>
      <Select
        size="sm"
        label="Media type"
        name="media"
        onChange={(e) => changeSearchParam('media', split(',', e.target.value))}
        selectionMode="multiple"
        defaultSelectedKeys={media}
      >
        {availableMediaTypes.map((type) => (
          <SelectItem key={type} value={type}>
            {type}
          </SelectItem>
        ))}
      </Select>
      {Boolean(availableEntities.length) && (
        <Select
          size="sm"
          label="Entity"
          name="entity"
          onChange={(e) => changeSearchParam('entity', split(',', e.target.value))}
          selectionMode="multiple"
          defaultSelectedKeys={entity}
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
          size="sm"
          label="Attribute"
          name="attribute"
          onChange={(e) => changeSearchParam('attribute', split(',', e.target.value))}
          selectionMode="multiple"
          defaultSelectedKeys={attribute}
        >
          {availableAttributes.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </Select>
      )}
      <Button type="submit">search</Button>
    </Form>
  );
};