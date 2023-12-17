/*
시작 페이지
@author 조혜안
@since 2023.11.05
*/
import {useState, useRef, useEffect} from 'react';
import { Button, Grid, TextField } from "@mui/material";
import logoText from "assets/logo_text2.png";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { atomIsLogin, atomLoginId } from "recoil/atomIsLogin";

export default function Login() {
  const setIsLogin = useSetRecoilState(atomIsLogin);
  const setLoginId = useSetRecoilState(atomLoginId);

  const icon = {
    hidden: {
      pathLength: 0,
      fill: "#ffffff",
    },
    visible: {
      pathLength: 1,
      fill: "#8093BC",
    },
  };

  const inputRef = useRef<HTMLInputElement>();
  const [id, setId] = useState('E178622');
  const handleId = (event: any) => {
    return setId(event.target.value);
  }
  const focusInput = useEffect(() => {
    if(inputRef.current !== undefined){
      inputRef.current.focus();
    }
  })
  const doLogin = () => {
    //사번 간단 검증
    if(id.length != 7) {
      alert('사번을 확인하세요.');
      if(inputRef.current !== undefined){
        inputRef.current.focus();
      }
      return;
    }
    setLoginId(id);
    setIsLogin(true)
  }

  return (
    <Grid container spacing={30}>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <Grid
          container
          sx={
            {
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
            }
          }
        >
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center"
            }}
          >
            <motion.svg
              width="150px"
              height="150px"
              viewBox="0 -30 150 150"
              className="item"
            >
              <motion.path
                d="M113.988 40.689C105.747 26.9869 94.414 15.4032 80.8958 6.86402C74.8042 3.00321 67.86 0.6923 60.6696 0.133047C53.4792 -0.426205 46.2612 0.783205 39.6458 3.65569C33.8594 6.38508 28.8243 10.482 24.9754 15.5926C21.1265 20.7032 18.5794 26.6739 17.5542 32.989C17.1875 35.2349 16.8667 37.5724 16.5917 39.4057H12.0083C10.4379 39.3875 8.87947 39.6811 7.42333 40.2695C5.96718 40.8579 4.64227 41.7295 3.52536 42.8336C2.40844 43.9377 1.52173 45.2525 0.916584 46.7018C0.311439 48.151 -0.000105333 49.706 2.67146e-08 51.2765V90.464C2.67146e-08 91.5094 0.415282 92.512 1.15449 93.2512C1.89369 93.9904 2.89627 94.4057 3.94167 94.4057H11.8708V92.6182C11.8591 88.3744 12.8689 84.19 14.8149 80.4186C16.7609 76.6473 19.5859 73.3996 23.0514 70.9499C26.5169 68.5003 30.521 66.9206 34.7255 66.3443C38.9301 65.7681 43.2116 66.2121 47.2083 67.639L42.625 72.2224C38.9649 71.5491 35.1915 71.8654 31.6945 73.1385C28.1976 74.4116 25.104 76.5953 22.7333 79.464C21.511 80.6904 20.5314 82.1366 19.8458 83.7265C18.4355 86.4556 17.6527 89.4652 17.5544 92.5356C17.4562 95.6059 18.045 98.6594 19.2779 101.473C20.5109 104.287 22.3567 106.789 24.6807 108.798C27.0046 110.807 29.748 112.272 32.7104 113.085C35.6728 113.898 38.7793 114.039 41.8032 113.498C44.827 112.956 47.6918 111.746 50.1882 109.956C52.6846 108.166 54.7496 105.841 56.2323 103.15C57.715 100.46 58.578 97.4723 58.7583 94.4057H83.875V92.6182C83.8659 88.3799 84.8757 84.2014 86.8191 80.4349C88.7626 76.6684 91.5829 73.4242 95.0424 70.9756C98.5019 68.527 102.499 66.9458 106.698 66.3651C110.896 65.7844 115.172 66.2213 119.167 67.639L114.583 72.2224C110.923 71.5491 107.15 71.8654 103.653 73.1385C100.156 74.4116 97.0623 76.5953 94.6917 79.464C93.4694 80.6904 92.4897 82.1366 91.8042 83.7265C90.4131 86.4552 89.6473 89.4595 89.5622 92.5212C89.4772 95.5828 90.0751 98.625 91.3125 101.427C92.5499 104.228 94.3958 106.719 96.7161 108.719C99.0364 110.718 101.773 112.175 104.727 112.985C107.681 113.795 110.778 113.936 113.793 113.4C116.809 112.863 119.667 111.662 122.16 109.882C124.653 108.103 126.718 105.791 128.207 103.114C129.695 100.437 130.568 97.4623 130.763 94.4057H142.725C143.77 94.4057 144.773 93.9904 145.512 93.2512C146.251 92.512 146.667 91.5094 146.667 90.464V82.3057C146.632 72.7203 143.398 63.4208 137.478 55.8819C131.558 48.3429 123.291 42.996 113.988 40.689ZM45.8333 39.4057H27.5C27.5 37.8015 27.9583 36.1515 28.2333 34.5015C29.0033 29.4908 31.0354 24.7582 34.1383 20.7492C37.2413 16.7402 41.3132 13.5865 45.9708 11.5849L45.8333 39.4057ZM38.3167 105.222C36.0504 105.222 33.8351 104.55 31.9508 103.291C30.0664 102.032 28.5978 100.243 27.7305 98.1489C26.8633 96.0552 26.6364 93.7513 27.0785 91.5286C27.5206 89.3059 28.6119 87.2642 30.2144 85.6618C31.8169 84.0593 33.8586 82.968 36.0813 82.5259C38.304 82.0837 40.6078 82.3106 42.7016 83.1779C44.7953 84.0452 46.5849 85.5138 47.8439 87.3981C49.103 89.2824 49.775 91.4978 49.775 93.764C49.775 96.803 48.5678 99.7174 46.4189 101.866C44.2701 104.015 41.3556 105.222 38.3167 105.222ZM77.9167 62.3224H64.1667V53.1557H77.9167V62.3224ZM50.4167 39.4057V9.47652C59.0285 8.30432 67.7797 10.168 75.1667 14.7474C85.3165 21.1276 94.0516 29.5196 100.833 39.4057H50.4167ZM110.275 105.222C108.009 105.222 105.793 104.55 103.909 103.291C102.025 102.032 100.556 100.243 99.6889 98.1489C98.8216 96.0552 98.5947 93.7513 99.0368 91.5286C99.479 89.3059 100.57 87.2642 102.173 85.6618C103.775 84.0593 105.817 82.968 108.04 82.5259C110.262 82.0837 112.566 82.3106 114.66 83.1779C116.754 84.0452 118.543 85.5138 119.802 87.3981C121.061 89.2824 121.733 91.4978 121.733 93.764C121.733 96.803 120.526 99.7174 118.377 101.866C116.228 104.015 113.314 105.222 110.275 105.222Z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 3, ease: "easeInOut" },
                  fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                }}
              />
            </motion.svg>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <img src={logoText} width="250px" alt={"logoText"} />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "5vh", textAlign: "center" }}>
            <TextField sx={{width: "300px" }} id="outlined-basic" label="사번" variant="outlined" value={id} onChange={handleId} inputRef={inputRef}/>
          </Grid>
        </Grid>
        
        <Grid item xs={12} sx={{ marginTop: "4vh", textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{ width: "250px" }}
            onClick={() => doLogin()}
          >
            시작하기
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}