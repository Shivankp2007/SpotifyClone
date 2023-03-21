import React, {useState, useEffect, useRef} from 'react'
import {
    styled, Typography, Slider,
    Paper, Stack, Box
} from '@mui/material';



// #region ------------ ICONS ---------
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';

import PauseIcon from '@mui/icons-material/Pause';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// #endregion ------------ ICONS ---------

// #region ------- Tracts -------------------------------------------------------
import fade from './music/As You Fade Away - NEFFEX.mp3'
import enough from './music/Enough - NEFFEX.mp3'
import immortal from './music/Immortal - NEFFEX.mp3';
import playDead from './music/Play Dead - NEFFEX.mp3';
import winning from './music/Winning - NEFFEX.mp3';
import house from './music/House-Of-Memories.mp3';
import mok from './music/Mockingbird - Eminem_128-(DJMaza).mp3';
import bones from './music/bones.mp3';
// #endregion ---------------------------------------------------------------
//img
import mokm from './Components/Middle/Images/mokm.jpg'
import housem from './Components/Middle/Images/housem.jpg'
import bonesm from './Components/Middle/Images/bonesm.jpg'


import play from './Components/Middle/Images/play.png'

// #region -------- Styled Components -----------------------------------------
const Div = styled('div')(({theme}) => ({
    backgroundColor: 'black',
    height:'300px',
    width:'100%',
    paddingTop: theme.spacing(6),
    alignItems:'center'
}))

const CustomPaper = styled(Paper)(({theme}) => ({
    position:'fixed',
    zIndex:1,
    backgroundColor:'#181818',
    display:'flex',
    width:'100%',
    flexDirection:'column',
    bottom:0,
    height:'90px',
    alignItems:'center'
    
}))
const PSlider = styled(Slider)(({theme, ...props}) => ({
    color: 'white',
    height: 2,
    width:'600px',
    '&:hover': {
        cursor: 'pointer',
    },
    '& .MuiSlider-thumb': {
        width: '13px',
        height: '13px',
        display: props.thumbless ? 'none' : 'block',
        
    }
}))
// #endregion ---------------------------------------------------------------


const playlist = [bones,house,mok,fade, enough, immortal, playDead, winning];
const Image = [bonesm,housem,mokm,]


export default function Player() {
    const audioPlayer = useRef()
    const ImagePlayer = useRef()

    const [index, setIndex] = useState(0);

    const [currentSong] = useState(playlist[index]);
    const [currentSongImg] = useState(Image[index]);

    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(30);
    const [mute, setMute] = useState(false);

    const [elapsed, setElapsed] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if(audioPlayer){
            audioPlayer.current.volume = volume / 100;
        }

        
        if(isPlaying){
            setInterval(() => {
                const _duration = Math.floor(audioPlayer?.current?.duration);
                const _elapsed = Math.floor(audioPlayer?.current?.currentTime);

                setDuration(_duration);
                setElapsed(_elapsed);
            }, 100);
        }

    }, [
        volume, isPlaying
    ]);

    function formatTime(time) {
        if(time && !isNaN(time)){
            const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
            const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);

            return `${minutes}:${seconds}`;
        }
        return '00:00';
    }

    const togglePlay = () => {
        if(!isPlaying) {
            audioPlayer.current.play()
        }else {
            audioPlayer.current.pause()
        }
        setIsPlaying(prev => !prev)
    }

    const toggleForward = () => {
        audioPlayer.current.currentTime += 10;
    }

    const toggleBackward = () => {
        audioPlayer.current.currentTime -= 10;
    }

    const toggleSkipForward = () => {
        if(index >= playlist.length - 1) {
            setIndex(0);
            audioPlayer.current.src = playlist[0];
            ImagePlayer.current.src = Image[0]
            audioPlayer.current.play();
            if(audioPlayer.current.mute(true)){
                audioPlayer.current.mute(false);
            }
        } else {
            setIndex(prev => prev + 1);
            audioPlayer.current.src = playlist[index + 1];
            ImagePlayer.current.src = Image[index +1]
            audioPlayer.current.play();
            if(audioPlayer.current.mute(true)){
                audioPlayer.current.mute(false);
            }
        }
    }

    const toggleSkipBackward = () => {
        if(index > 0) {
            setIndex(prev => prev - 1);
            audioPlayer.current.src = playlist[index - 1];
            ImagePlayer.current.src = Image[index -1]
            audioPlayer.current.play();
        }
    }
    
    function VolumeBtns(){
        return mute
            ? <VolumeOffIcon sx={{color: 'white', '&:hover': {color: 'white'}}} onClick={() => setMute(!mute)} />
            : volume <= 20 ? <VolumeMuteIcon sx={{color: 'white', '&:hover': {color: 'white'}}} onClick={() => setMute(!mute)} />
            : volume <= 75 ? <VolumeDownIcon sx={{color: 'white', '&:hover': {color: 'white'}}} onClick={() => setMute(!mute)} />
            : <VolumeUpIcon sx={{color: 'white', '&:hover': {color: 'white'}}} onClick={() => setMute(!mute)} />
    }

    return (
        <Div>
            <img className='audioimg' ref={ImagePlayer} src={currentSongImg}/>
            <audio src={currentSong} ref={audioPlayer} muted={mute} />
            <CustomPaper>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Stack direction='row' spacing={1} 
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            width: '25%',
                            alignItems: 'center'
                        }}
                    >
                        <VolumeBtns  />

                        <PSlider min={0} max={100} value={volume}
                            onChange={(e, v) => setVolume(v)}
                        />
                    </Stack>

                    <Stack direction='row' spacing={1}
                        sx={{
                            display: 'flex',
                            width: '40%',
                            alignItems: 'center'
                        }}>
                        <SkipPreviousIcon className='skip' 
                            sx={{
                                color: 'gray', 
                                '&:hover': {color: 'white'}
                            }} 
                            onClick={toggleSkipBackward} disabled={true}/>
                        <FastRewindIcon sx={{color: 'gray', '&:hover': {color: 'white'}}} onClick={toggleBackward}/>

                        {!isPlaying
                            ?   <PlayArrowIcon className='skip' fontSize={'large'} sx={{color: 'white', '&:hover': {color: 'white'}}} onClick={togglePlay}/>
                            :   <PauseIcon className='skip' fontSize={'large'} sx={{color: 'white', '&:hover': {color: 'white'}}} onClick={togglePlay}/>
                        }

                        <FastForwardIcon className='skip' sx={{color: 'gray', '&:hover': {color: 'white'}}} onClick={toggleForward} />
                        <SkipNextIcon className='skip' sx={{color: 'gray', '&:hover': {color: 'white'}}} onClick={toggleSkipForward}/>
                    </Stack>

                    <Stack sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }} />
                </Box>
                <Stack spacing={1} direction='row' sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Typography sx={{color: 'white'}}>{formatTime(elapsed)}</Typography>
                    <PSlider thumbless value={elapsed} max={duration} />
                    <Typography sx={{color: 'white'}}>{formatTime(duration - elapsed)}</Typography>
                </Stack>
            </CustomPaper>
            <span id='spa' className="play-btn" onClick={togglePlay} >
                <img src={play} alt="" />
            </span>
        </Div>
    )
}
