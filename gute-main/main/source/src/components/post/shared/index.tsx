import { ThemeVariation } from '@common/enum';
import { PostItem } from '@store/slices/posts';

export enum PostInfo {
  User,
  Date,
  Comment,
}
export interface PostProps {
  hideCover?: boolean;
  hideContent?: boolean;
  data: PostItem;
  className?: string;
  theme?: ThemeVariation;
  hideButton?: boolean;
  hideDescription?: boolean;
  hideInfos?: boolean;
  infos?: PostInfo[];
}
