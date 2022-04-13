import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');

const onPlay = function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
};
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(currentTime)
    .then(function (seconds) { })
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});