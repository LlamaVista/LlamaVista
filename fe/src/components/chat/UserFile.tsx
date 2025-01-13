import React, { useEffect, useState } from 'react';
import { UserFileComponentProps } from '../../interface/chat/interface.chating';
import { useMutation, useQueries, useQuery } from 'react-query';
import { getUserSubmitFileList } from '../../APIs/chat/api.chat';
import Loading from '../loading/Loading';
import axios from 'axios';
import styled from 'styled-components';

const File = styled.span`
  cursor: pointer;
  color: blue;
`;

const UserFile = ({ fileId, thread_id }: UserFileComponentProps) => {
  const [fileName, setFileName] = useState<string>('');

  const { data, isLoading } = useQuery(
    ['userSubmitFileList', thread_id], // 캐시 키는 thread_id로 설정
    () => getUserSubmitFileList(thread_id), // thread_id를 인자로 전달
    {
      staleTime: 1000 * 60 * 60, // 1시간 동안 데이터가 유효
      cacheTime: 1000 * 60 * 60 * 5, // 5시간 동안 캐시 유지
      refetchOnWindowFocus: false, // 윈도우 포커스 시 refetch 방지
      enabled: !!thread_id, // thread_id가 있을 때만 실행
    }
  );

  useEffect(() => {
    if (data) {
      const newData = data.filter((fileData) => fileId[0] in fileData);
      if (newData.length > 0) {
        setFileName(newData[0][fileId[0]]);
      }
    }
  }, [data, fileId]);

  // const { mutate, isLoading } = useMutation(getUserSubmitFileList, {
  //   // onError: (e) => console.log(e),
  //   onSuccess: (data) => {
  //     const newData = data.filter((fileData) => fileId[0] in fileData);
  //     setFileName(newData[0][fileId[0]]);
  //   },
  // });

  // useEffect(() => {
  //   mutate(thread_id);
  // }, []);

  const DNS = process.env.REACT_APP_DNS;
  const SPRING_PORT = process.env.REACT_APP_PORT;

  const onFileClick = async () => {
    const response = await axios({
      url: `${DNS}:${SPRING_PORT}/static/files/${fileId}.csv`,
      method: 'GET',
      responseType: 'blob',
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${fileName}`);
    link.style.cssText = 'display:none';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        fileName && <File onClick={onFileClick}>{fileName}</File>
      )}
    </>
  );
};

export default UserFile;
