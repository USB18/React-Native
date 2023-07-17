export enum IMAGES {
    HOME_TAB_ICON = "HOME_TAB_ICON",
    PROFILE_TAB_ICON = "PROFILE_TAB_ICON",
    PLAYLIST_TAB_ICON = "PLAYLIST_TAB_ICON",
    BOOKMARK_TAB_ICON = "BOOKMARK_TAB_ICON",
    BACK_ARROW_ICON = "BACK_ARROW_ICON",
    SHARE_ICON = "SHARE_ICON",
    SLIDER_IMAGE = "SLIDER_IMAGE",
    PLAY_ICON = "PLAY_ICON",
    STAR_ICON = "STAR_ICON",
    AUDIO_ICON = "AUDIO_ICON",
    ARROW_DOWN_ICON = "ARROW_DOWN_ICON",
    WRITE_ICON = "WRITE_ICON",
    VIDEO_ICON = "VIDEO_ICON",
    FRAME_ICON = "FRAME_ICON",
    MINUS_ICON = "MINUS_ICON",
    ADD_ICON = "ADD_ICON",
    PLAY_BUTTON = "PLAY_BUTTON",
    LOCK_ICON = "LOCK_ICON",
    PLACEHOLDER_IMAGE = "PLACEHOLDER_IMAGE",
    RIGHT_ARROW = "RIGHT_ARROW",

    ONBORAD = "ONBORAD",
    LOGIN = "LOGIN",
    CLOSE = "CLOSE",
    EMAIL = "EMAIL",
    LOCK = "LOCK"
}

function getImage(name: string): number {
    let iconName: any;
    switch (name) {
        case IMAGES.HOME_TAB_ICON:
            iconName = require("../../assets/images/bottom-tab/home/home.png");
            break;
        case IMAGES.PLAYLIST_TAB_ICON:
            iconName = require("../../assets/images/bottom-tab/playlist/playlist.png");
            break;
        case IMAGES.BOOKMARK_TAB_ICON:
            iconName = require("../../assets/images/bottom-tab/bookmark/bookmark.png");
            break;
        case IMAGES.PROFILE_TAB_ICON:
            iconName = require("../../assets/images/bottom-tab/profile/profile.png");
            break;
        case IMAGES.BACK_ARROW_ICON:
            iconName = require("../../assets/images/home/back-arrow/back-arrow.png");
            break;
        case IMAGES.SHARE_ICON:
            iconName = require("../../assets/images/home/share/share.png");
            break;
        case IMAGES.SLIDER_IMAGE:
            iconName = require("../../assets/images/home/slider-image/slider.png");
            break;
        case IMAGES.PLAY_ICON:
            iconName = require("../../assets/images/home/play-button/play.png");
            break;
        case IMAGES.STAR_ICON:
            iconName = require("../../assets/images/home/star/star.png");
            break;
        case IMAGES.AUDIO_ICON:
            iconName = require("../../assets/images/home/audio/audio.png");
            break;
        case IMAGES.ARROW_DOWN_ICON:
            iconName = require("../../assets/images/home/arrow-down/arrow-down.png");
            break;
        case IMAGES.WRITE_ICON:
            iconName = require("../../assets/images/home/chapters/write/write.png");
            break;
        case IMAGES.FRAME_ICON:
            iconName = require("../../assets/images/home/chapters/frame/frame.png");
            break;
        case IMAGES.VIDEO_ICON:
            iconName = require("../../assets/images/home/chapters/video/video.png");
            break;
        case IMAGES.MINUS_ICON:
            iconName = require("../../assets/images/home/minus/minus.png");
            break;
        case IMAGES.ADD_ICON:
            iconName = require("../../assets/images/home/add/add.png");
            break;
        case IMAGES.PLAY_BUTTON:
            iconName = require("../../assets/images/home/play-icon/play_icon.png");
            break;
        case IMAGES.LOCK_ICON:
            iconName = require("../../assets/images/home/lock/lock.png");
            break;
        case IMAGES.PLACEHOLDER_IMAGE:
            iconName = require("../../assets/images/home/placeholder/Placeholder.png");
            break;
        case IMAGES.RIGHT_ARROW:
            iconName = require("../../assets/images/home/right-arrow/right_arrow.png");
            break;

        case IMAGES.ONBORAD:
            iconName = require("../../assets/images/assing-image/auth-screens/GraphicPart.png");
            break;
        case IMAGES.LOGIN:
            iconName = require("../../assets/images/assing-image/auth-screens/Illustration.png");
            break;
        case IMAGES.CLOSE:
            iconName = require("../../assets/images/assing-image/auth-screens/CloseIcon.png");
            break;
        case IMAGES.CLOSE:
            iconName = require("../../assets/images/assing-image/auth-screens/CloseIcon.png");
            break;
        case IMAGES.EMAIL:
            iconName = require("../../assets/images/assing-image/text-input/EmailIcon.png");
            break;
        case IMAGES.LOCK:
            iconName = require("../../assets/images/assing-image/text-input/LockIcon.png");
            break;
        default:
            iconName = null;
    }
    return iconName;
}

export function getImageFromURL(url: string): number {
    if (url) {
        const name: string = url.substring(url.lastIndexOf('/') + 1);
        return getImage(name);
    }
    return -1;
}