import React from 'react';
import { IAssistantFileComponentProps } from '../../interface/chat/interface.chating';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { fetchImage } from '../../APIs/chat/api.chat';
import Loading from '../loading/Loading';

const Img = styled.img`
  width: 70%;
`;

const AssistantFile = ({ fileId }: IAssistantFileComponentProps) => {
  const { data: imageBlob, isLoading } = useQuery(
    ['image', fileId],
    () => fetchImage(fileId),
    {
      staleTime: 1000 * 60 * 60, // 1시간 동안 캐시
      cacheTime: 1000 * 60 * 60 * 24, // 1일 동안 캐시 유지
      refetchOnWindowFocus: false, // 포커스 시 리패치 방지
    }
  );

  const imageUrl = imageBlob ? URL.createObjectURL(imageBlob) : '';

  return (
    <>
      <br />
      <br />
      {isLoading ? <Loading /> : <Img src={imageUrl} alt="Image" />}
    </>
  );
};

export default AssistantFile;
