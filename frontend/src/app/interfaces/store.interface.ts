import { User } from './user.interface';
import { Video } from './video.interface';
export interface Store {
    videos: Video[];
    user: User;
}
