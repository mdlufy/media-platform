import { Video } from './../+state/videos/videos.reducer';
import { VideoDto } from '../interfaces/video.dto';

export function mapVideoDtoToVideoView(videoDto: VideoDto): Video {
    const id = videoDto._id;
    const title = videoDto.title;
    const coverImage = videoDto.coverImage;
    const video = videoDto.video;

    return {
        id,
        title,
        coverImage,
        video,
    };
}
