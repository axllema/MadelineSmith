import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Howl, Howler } from 'howler';
import Water from '../assets/music/Water.mp3';
import Looking from '../assets/music/LookingAtMe.mp3';
import Coast from '../assets/music/Coast.mp3';
import '../scss/components/_musicplayer.scss';
import '../scss/style.scss';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    // Référence pour stocker l'instance Howl
    const soundRef = useRef(null);

    const tracks = useMemo(() => [
        {
            title: '⋆˚𝜗𝜚 Water - Tyla⋆˚𝜗𝜚 ',
            src: [Water],
        },
        {
            title: '⋆˚𝜗𝜚 Looking at Me - Sabrina Carpenter⋆˚𝜗𝜚',
            src: [Looking],
        },
        {
            title: '⋆˚𝜗𝜚 Coast -  Hailee Steinfeld⋆˚𝜗𝜚 ',
            src: [Coast],
        }
    ], []);

    const playSound = useCallback((trackIndex) => {
        if (soundRef.current) {
            // Arrête la piste actuelle si elle est en cours
            soundRef.current.stop();
        }
        // Crée une nouvelle instance Howl pour la piste sélectionnée
        const sound = new Howl({
            src: [tracks[trackIndex].src],
            html5: true,
        });
        sound.play();
        setIsPlaying(true);
        // Stocke la nouvelle instance Howl dans la référence
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
        // Tente de jouer la piste actuelle dès que le composant est monté
        playTrack(currentTrack);
    
        // Assurez-vous d'arrêter la lecture lorsque le composant est démonté
        return () => {
            Howler.stop();
        };
    }, [playTrack, currentTrack]);

    const togglePlayPause = () => {
        if (isPlaying) {
            // Utilise pause() au lieu de stop()
            soundRef.current.pause();
            setIsPlaying(false);
        } else {
            if (soundRef.current) {
                soundRef.current.play();
            } else {
                // Joue la piste si aucune instance Howl n'existe
                playTrack(currentTrack);
            }
            setIsPlaying(true);
        }
    };

    
    const playNextTrack = () => {
        let nextTrack = currentTrack + 1;
        if (nextTrack < tracks.length) {
            setCurrentTrack(nextTrack);
        }
    };
    
    const playPreviousTrack = () => {
        let previousTrack = currentTrack - 1;
        if (previousTrack >= 0) {
            setCurrentTrack(previousTrack);
        }
    };
    
    return (

        <div className="music-player">
            <div className="music-player-controls">
                <button onClick={playPreviousTrack} className='music-player-controls-button'> ⏮ </button>
                <button onClick={togglePlayPause} className='music-player-controls-button'>
                    {isPlaying ? '⏸' : '▶︎'}
                </button>
                <button onClick={playNextTrack} className='music-player-controls-button'> ⏭ </button>
            </div>

            <div className="music-player-track-info">
                <h2>{tracks[currentTrack].title}</h2>
            </div>
        </div>

    );
};

export default MusicPlayer;
