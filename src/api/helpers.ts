import {
	MediaType,
	MediaTypeAttributes,
	MediaTypeEntities,
} from './types';

// Helper function to get entities for a specific media type
export function getEntitiesForMediaType(
    mediaType: MediaType,
    entities: MediaTypeEntities
  ): string[] {
    return entities[mediaType];
  }
  
  // Helper function to get attributes for a specific media type
export  function getAttributesForMediaType(
    mediaType: MediaType,
    attributes: MediaTypeAttributes
  ): string[] {
    return attributes[mediaType];
  }
