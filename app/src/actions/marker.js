import { SET_HIGHLIGHTED_MARKER, CLEAR_HIGHLIGHTED_MARKER } from './actions';

export const clearHighlightedMarker = () => ({
  type: CLEAR_HIGHLIGHTED_MARKER,
});
export const highlightMarker = (markerId, description) => ({
  type: SET_HIGHLIGHTED_MARKER,
  payload: {
    markerId: markerId,
    description: description,
  },
});
