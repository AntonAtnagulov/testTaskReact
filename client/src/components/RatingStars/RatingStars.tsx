import { useState } from 'react';
import { Rating, Typography, Button, Box } from '@mui/material/';
import { IRatingState, IRatingStarsProps } from '../../interfaces/interfaces';
import { useDispatch } from 'react-redux';
import { setFilmRating } from '../../redux/rtkSlice';

export default function RatingStars({ film, setOpen }: IRatingStarsProps) {
    const dispatch = useDispatch();
    const [rating, setRating] = useState<IRatingState>({
        scenario: 0,
        actingSkill: 0,
        cameraWork: 0,
    });

    const rated =
        rating.scenario && rating.actingSkill && rating.cameraWork
            ? true
            : false;

    const submitRatingHandler = (): void => {
        dispatch(setFilmRating({ id: film.id, rate: rating }));
        setOpen(false);
    };

    return (
        <>
            <Box>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Операторская работа
                </Typography>
                <Rating
                    name="scenario"
                    value={rating.scenario}
                    onChange={(event, newValue) => {
                        setRating({ ...rating, scenario: newValue });
                    }}
                />
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Операторская работа
                </Typography>
                <Rating
                    name="actingSkill"
                    value={rating.actingSkill}
                    onChange={(event, newValue) => {
                        setRating({ ...rating, actingSkill: newValue });
                    }}
                />
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Операторская работа
                </Typography>
                <Rating
                    name="cameraWork"
                    value={rating.cameraWork}
                    onChange={(event, newValue) => {
                        setRating({ ...rating, cameraWork: newValue });
                    }}
                />
            </Box>
            <Box>
                <Button
                    style={{ marginTop: '12px' }}
                    variant="outlined"
                    size="medium"
                    disabled={!rated}
                    onClick={submitRatingHandler}
                >
                    Оценить
                </Button>
            </Box>
        </>
    );
}
