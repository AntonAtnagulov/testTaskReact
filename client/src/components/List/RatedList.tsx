import {useSelector } from 'react-redux';
import OneCard from '../OneCard/OneCard';
import { filmsType } from '../../interfaces/interfaces';

export default function FavList() {
    const films: filmsType = useSelector(
        (store: any) => store.toolkit.films
    );
    const ratedFilms = films.filter(el => el.scenario)

    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
            }}
        >
            {ratedFilms.length ? (
                ratedFilms.map((film) => <OneCard key={film.id} film={film} />)
            ) : (
                <h6 style={{ color: '#9699B5' }}>
                    Здесь будут ваши оценки
                </h6>
            )}
        </div>
    );
}
