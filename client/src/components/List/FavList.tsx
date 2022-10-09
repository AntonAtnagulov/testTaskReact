import {useSelector } from 'react-redux';
import OneCard from '../OneCard/OneCard';
import { filmsType } from '../../interfaces/interfaces';

export default function FavList() {
    const favorite: filmsType = useSelector(
        (store: any) => store.toolkit.favorites
    );

    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
            }}
        >
            {favorite.length ? (
                favorite.map((film) => <OneCard key={film.id} film={film} />)
            ) : (
                <h6 style={{ color: '#9699B5' }}>
                    Здесь будут ваши избранные фильмы
                </h6>
            )}
        </div>
    );
}
