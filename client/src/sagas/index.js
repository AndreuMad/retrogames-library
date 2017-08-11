import { watchGetGames, watchDeleteGame } from './games';

export default function* rootSaga() {
    yield [
        watchGetGames(),
        watchDeleteGame()
    ];
}