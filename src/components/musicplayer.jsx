import { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import { Howl, Howler } from 'howler';
import Water from '../assets/music/Water.mp3';
import Looking from '../assets/music/LookingAtMe.mp3';
import Coast from '../assets/music/Coast.mp3';
import GoodGraces from '../assets/music/GoodGraces.mp3';
import Breakfast from '../assets/music/Breakfast.mp3';
import BedChem from '../assets/music/BedChem.mp3';
import '../scss/components/_musicplayer.scss';
import '../scss/style.scss';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);
    const soundRef = useRef(null);

    const tracks = useMemo(() => [
        {
            title: '⋆˚𝜗𝜚 Water - Tyla⋆˚𝜗𝜚',
            src: [Water],
        },
        {
            title: '⋆˚𝜗𝜚 Looking at Me - Sabrina Carpenter⋆˚𝜗𝜚',
            src: [Looking],
        },
        {
            title: '⋆˚𝜗𝜚 Coast - Hailee Steinfeld⋆˚𝜗𝜚',
            src: [Coast],
        },
        {
            title: '⋆˚𝜗𝜚 Good Graces - Sabrina Carpenter⋆˚𝜗𝜚',
            src: [GoodGraces],
        },
        {
            title: '⋆˚𝜗𝜚 Breakfast - Dove Cameron ⋆˚𝜗𝜚',
            src: [Breakfast],
        },
        {
            title: '⋆˚𝜗𝜚 Bed Chem - Sabrina Carpenter⋆˚𝜗𝜚',
            src: [BedChem],
        }
    ], []);

    const playSound = useCallback((trackIndex) => {
        if (soundRef.current) {
            soundRef.current.stop();
        }
        const sound = new Howl({
            src: [tracks[trackIndex].src],
            html5: true,
        });
        sound.play();
        setIsPlaying(true);
        soundRef.current = sound;
    }, [tracks]);

    const playTrack = useCallback((trackIndex) => {
        if (Howler.ctx && Howler.ctx.state === 'suspended') {
            Howler.ctx.resume().then(() => {
                playSound(trackIndex);
            });
        } else {
            playSound(trackIndex);
        }
    }, [playSound]);

    useEffect(() => {
        if (hasInteracted) {
            playTrack(currentTrack);
        }
    }, [currentTrack, playTrack, hasInteracted]);

    const togglePlayPause = () => {
        if (!hasInteracted) {
            setHasInteracted(true);
        }
        if (isPlaying) {
            soundRef.current.pause();
            setIsPlaying(false);
        } else {
            if (soundRef.current) {
                soundRef.current.play();
            } else {
                playTrack(currentTrack);
            }
            setIsPlaying(true);
        }
    };

    const playNextTrack = () => {
        let nextTrack = currentTrack + 1;
        if (nextTrack < tracks.length) {
            setCurrentTrack(nextTrack);
        } else {
            setCurrentTrack(0); // Restart from the first track if it's the end of the list
        }
    };

    const playPreviousTrack = () => {
        let previousTrack = currentTrack - 1;
        if (previousTrack >= 0) {
            setCurrentTrack(previousTrack);
        } else {
            setCurrentTrack(tracks.length - 1); // Go to the last track if it's the beginning of the list
        }
    };

    return (
        <div className="music-player">
            <div className="music-player-controls">
                <button onClick={playPreviousTrack} className='music-player-controls-button'>⏮</button>
                <button onClick={togglePlayPause} className='music-player-controls-button'>
                    {isPlaying ? '⏸' : '▶︎'}
                </button>
                <button onClick={playNextTrack} className='music-player-controls-button'>⏭</button>
            </div>
            <div className="music-player-track-info">
                <h2>{tracks[currentTrack].title}</h2>
            </div>
        </div>
    );
};

export default MusicPlayer;