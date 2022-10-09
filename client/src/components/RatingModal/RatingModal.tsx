import React from 'react';
import { Modal, Typography, Button, Box } from '@mui/material/';
import RatingStars from '../RatingStars/RatingStars';
import { IRatingProps } from '../../interfaces/interfaces';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: '6px',
};

export default function RatingModal({film} : IRatingProps) {
    const [open, setOpen] = React.useState<boolean>(false);

    const handleOpen = (): void => setOpen(true);
    const handleClose = (): void => setOpen(false);

    return (
        <div>
            <Button variant="outlined" sx={{width: '100%', height: '40px', alignItems: 'center'}} size="small" onClick={handleOpen}>{film.rated ?
             <>
             <span>Изменить </span>
             <StarBorderOutlinedIcon sx={{fontSize: '18px'}}/>
             </> 
             : 
             <>
             <span>Оценить  </span>
             <StarBorderOutlinedIcon sx={{fontSize: '18px'}}/>
             </> }
             </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Оценить фильм
                        </Typography>
                        <RatingStars film={film} setOpen={setOpen}/>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
