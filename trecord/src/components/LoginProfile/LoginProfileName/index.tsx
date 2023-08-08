interface LoginProfileNameProps {
  nickNameValue: string;
  nickNameSetValue: React.Dispatch<React.SetStateAction<string>>;
}
export const LoginProfileName = ({
  nickNameValue,
  nickNameSetValue,
}: LoginProfileNameProps) => {
  return (
    <input
      type="text"
      placeholder="닉네임을 입력해주세요"
      id="nickName"
      value={nickNameValue}
      onChange={(e) => nickNameSetValue(e.target.value)}
    />
  );
};