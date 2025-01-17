'use client';

import { Alert, Spinner } from '@nextui-org/react';
import pm from 'picomatch';
import { useCallback, useEffect, useMemo, useState } from 'react';

export type MediaPlayerProps = {
  mediaUrl: string;
};

const mediaTypes = ['audio', 'video', 'ufo'];
type MediaType = (typeof mediaTypes)[number];

export const MediaPlayer = ({ mediaUrl }: MediaPlayerProps) => {
  const [mimeType, setMimeType] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const mediaType = useMemo(() => {
    let type: MediaType = 'ufo';
    if (mimeType) {
      const contentType = mimeType.split('/')[0];
      if (mediaTypes.includes(contentType)) type = contentType;
    }
    return type;
  }, [mimeType]);

  const detectType = useCallback(async () => {
    try {
      setError(null);
      setMimeType(null);
      if (!pm('*.itunes.apple.com')(new URL(mediaUrl).hostname)) {
        throw new Error('Invalid media URL');
      }
      const fileFetch = await fetch(mediaUrl);
      const contentType = fileFetch.headers.get('content-type');
      setMimeType(contentType);
    } catch (error) {
      let reason = 'unknown';
      if (error instanceof Error) {
        reason = error.message;
      }
      setError(
        `Failed to fetch media file. Reason: ${reason}, URL: ${mediaUrl}`
      );
    }
  }, [mediaUrl]);

  useEffect(() => {
    detectType();
  }, [detectType]);

  if (error) {
    return (
      <Alert
        classNames={{ mainWrapper: 'overflow-auto' }}
        color='danger'
        title={error}
        onClick={detectType}
      />
    );
  }

  if (!mimeType) {
    return <Spinner />;
  }

  const playerClassName = 'w-full';

  return (
    <div>
      {mediaType === 'video' && (
        <video controls className={playerClassName} autoPlay>
          <source src={mediaUrl} type={mimeType} />
        </video>
      )}
      {mediaType === 'audio' && (
        <audio controls className={playerClassName} autoPlay>
          <source src={mediaUrl} type={mimeType} />
        </audio>
      )}
    </div>
  );
};
