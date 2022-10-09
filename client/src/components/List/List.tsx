import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OneCard from '../OneCard/OneCard';
import { filmsType } from '../../interfaces/interfaces';
import axios from 'axios';
import { setFilms } from '../../redux/rtkSlice';

export default function List() {
    const dispatch = useDispatch();
    const films: filmsType = useSelector((store: any) => store.toolkit.films);

    useEffect(() => {
        (async () => {
            if (!films.length) {
                const res = await axios.get(
                    'https://run.mocky.io/v3/f41356c2-e1ee-4fe3-aad7-62e2c5bb68a4'
                );
                const modifyData = res.data.data.map((el: any) => {
                    const modifyFilm = {...el, favorite: false, scenario: 0, actingSkill: 0, cameraWork: 0}
                    return modifyFilm
                })
                dispatch(setFilms(modifyData));
            }
        })();
    }, []);

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
            {films.map((film) => (
                <OneCard key={film.id} film={film} />
                ))}
        </div>
    );
}
