export type MediaType =
  | 'movie'
  | 'podcast'
  | 'music'
  | 'musicVideo'
  | 'audiobook'
  | 'shortFilm'
  | 'tvShow'
  | 'software'
  | 'ebook'
  | 'all';

export type MediaTypeEntities = Record<MediaType, string[]>;

export type MediaTypeAttributes = Record<MediaType, string[]>;

export type BaseMediaProps = {
  wrapperType: MediaType;
  artistId: number;
  collectionId: number;
  artistName: string;
  collectionName: string;
  artworkUrl100?: string;
  copyright?: string;
  previewUrl?: string;
  releaseDate?: string;
  trackId?: number;
  [k: string]: unknown;
};

export type ApiSearchResponse = {
  resultCount: number;
  results: Array<BaseMediaProps>;
};

export const constructAttributes: MediaTypeAttributes = {
  ebook: ['ebook'],
  movie: [
    'actorTerm',
    'genreIndex',
    'artistTerm',
    'shortFilmTerm',
    'producerTerm',
    'ratingTerm',
    'directorTerm',
    'releaseYearTerm',
    'featureFilmTerm',
    'movieArtistTerm',
    'movieTerm',
    'ratingIndex',
    'descriptionTerm',
  ],
  podcast: [
    'titleTerm',
    'languageTerm',
    'authorTerm',
    'genreIndex',
    'artistTerm',
    'ratingIndex',
    'keywordsTerm',
    'descriptionTerm',
  ],
  music: [
    'mixTerm',
    'genreIndex',
    'artistTerm',
    'composerTerm',
    'albumTerm',
    'ratingIndex',
    'songTerm',
  ],
  musicVideo: [
    'genreIndex',
    'artistTerm',
    'albumTerm',
    'ratingIndex',
    'songTerm',
  ],
  audiobook: ['titleTerm', 'authorTerm', 'genreIndex', 'ratingIndex'],
  shortFilm: [
    'genreIndex',
    'artistTerm',
    'shortFilmTerm',
    'ratingIndex',
    'descriptionTerm',
  ],
  software: ['softwareDeveloper'],
  tvShow: [
    'genreIndex',
    'tvEpisodeTerm',
    'showTerm',
    'tvSeasonTerm',
    'ratingIndex',
    'descriptionTerm',
  ],
  all: [
    'actorTerm',
    'languageTerm',
    'allArtistTerm',
    'tvEpisodeTerm',
    'shortFilmTerm',
    'directorTerm',
    'releaseYearTerm',
    'titleTerm',
    'featureFilmTerm',
    'ratingIndex',
    'keywordsTerm',
    'descriptionTerm',
    'authorTerm',
    'genreIndex',
    'mixTerm',
    'allTrackTerm',
    'artistTerm',
    'composerTerm',
    'tvSeasonTerm',
    'producerTerm',
    'ratingTerm',
    'songTerm',
    'movieArtistTerm',
    'showTerm',
    'movieTerm',
    'albumTerm',
  ],
};

// Example usage
export const constructEntities: MediaTypeEntities = {
  movie: ['movieArtist', 'movie'],
  podcast: ['podcastAuthor', 'podcast'],
  music: ['musicArtist', 'musicTrack', 'album', 'musicVideo', 'mix', 'song'],
  musicVideo: ['musicArtist', 'musicVideo'],
  audiobook: ['audiobookAuthor', 'audiobook'],
  shortFilm: ['shortFilmArtist', 'shortFilm'],
  tvShow: ['tvEpisode', 'tvSeason'],
  software: ['software', 'iPadSoftware', 'macSoftware'],
  ebook: ['ebook'],
  all: [
    'movie',
    'album',
    'allArtist',
    'podcast',
    'musicVideo',
    'mix',
    'audiobook',
    'tvSeason',
    'allTrack',
  ],
};
