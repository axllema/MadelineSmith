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
    const soundRef = useRef(null); // Référence pour stocker l'instance Howl

    const tracks = useMemo(() => [
        {
            title: ' Water - Tyla',
            src: [Water],
        },
        {
            title: ' Looking at Me - Sabrina Carpenter',
            src: [Looking],
        },
        {
            title: ' Coast -  Hailee Steinfeld',
            src: [Coast],
        }
    ], []);

    const playSound = useCallback((trackIndex) => {
        if (soundRef.current) {
            soundRef.current.stop(); // Arrête la piste actuelle si elle est en cours
        }
        // Crée une nouvelle instance Howl pour la piste sélectionnée
        const sound = new Howl({
            src: [tracks[trackIndex].src],
            html5: true,
        });
        sound.play();
        setIsPlaying(true);
        soundRef.current = sound; // Stocke la nouvelle instance Howl dans la référence
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
            soundRef.current.pause(); // Utilise pause() au lieu de stop()
            setIsPlaying(false);
        } else {
            if (soundRef.current) {
                soundRef.current.play();
            } else {
                playTrack(currentTrack); // Joue la piste si aucune instance Howl n'existe
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
            <div className="controls">
                <button onClick={playPreviousTrack}>Previous</button>
                <button onClick={togglePlayPause}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button onClick={playNextTrack}>Next</button>
            </div>
            <div className="track-info">
                <h2>{tracks[currentTrack].title}</h2>
            </div>
        </div>
        
    );
};

export default MusicPlayer;
