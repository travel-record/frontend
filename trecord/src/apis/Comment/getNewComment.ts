import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetCommentProps } from '@/types/comment';
import COMMENT_API_KEY from './constants';
import { Page } from '@/types';

interface Props {
  recordId: number;
  page: number;
}
export const getNewComment = async ({
  recordId,
  page,
}: Props): Promise<Page<GetCommentProps>> => {
  const url = `/api/v1/records/${recordId}/comments?page=0&size=${page}`;
  const response: Page<GetCommentProps> = await http.get(url);
  return response;
};

const useGetNewComment = ({
  recordId,
  page,
}: Props): UseQueryResult<Page<GetCommentProps>> => {
  return useQuery(
    [COMMENT_API_KEY.NEW_COMMENT, { record_id: recordId, page }],
    () => getNewComment({ recordId, page }),
    {
      suspense: true,
    },
  );
};

export default useGetNewComment;
