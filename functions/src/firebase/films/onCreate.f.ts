import * as functions from 'firebase-functions';

export const filmsOnCreate = functions.database.ref('films/{filmId}').onCreate((snapshot, context) => {
  functions.logger.info("new film created!", context.params.filmId, snapshot.val());
  return true;
});
