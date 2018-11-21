import { ajax } from 'rxjs/ajax'
import { of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { CARDS, ERROR } from '../constants'
import { ICard } from '../types'
import { getCardsByFetch } from '../AC'

export const fetchWinesEpic = (action$: any) =>
    action$.pipe(
        ofType(CARDS.START_FETCH),
        mergeMap(action =>
            ajax.getJSON('./winecardsJSON.json').pipe(
                map((response: ICard[]) => getCardsByFetch(response)),
                catchError(error =>
                    of({
                        type: ERROR.FETCH_ERROR,
                        payload: error.xhr.response,
                        error: true,
                    }),
                ),
            ),
        ),
    )
