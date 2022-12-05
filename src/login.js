// import React, { useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import { JWTBuilder } from "./jwt-connector";
// import { useNavigate } from "react-router-dom";
// // import { useDispatch } from "react-redux";

// const Login = () => {
//   let [searchParams] = useSearchParams();
//   const navigate = useNavigate();
// //   const dispatch = useDispatch();

//   const cert = `-----BEGIN CERTIFICATE-----
//   MIID/zCCAuegAwIBAgIJAPmPOnjOfbO/MA0GCSqGSIb3DQEBCwUAMIGVMQswCQYD
//   VQQGEwJJTjEUMBIGA1UECAwLTUFIQVJBU0hUUkExDTALBgNVBAcMBFBVTkUxEzAR
//   BgNVBAoMCk1JTklPUkFOR0UxEzARBgNVBAsMCk1JTklPUkFOR0UxEzARBgNVBAMM
//   Ck1JTklPUkFOR0UxIjAgBgkqhkiG9w0BCQEWE2luZm9AbWluaW9yYW5nZS5jb20w
//   HhcNMTYwMTMwMDgyMzE0WhcNMjYwMTI3MDgyMzE0WjCBlTELMAkGA1UEBhMCSU4x
//   FDASBgNVBAgMC01BSEFSQVNIVFJBMQ0wCwYDVQQHDARQVU5FMRMwEQYDVQQKDApN
//   SU5JT1JBTkdFMRMwEQYDVQQLDApNSU5JT1JBTkdFMRMwEQYDVQQDDApNSU5JT1JB
//   TkdFMSIwIAYJKoZIhvcNAQkBFhNpbmZvQG1pbmlvcmFuZ2UuY29tMIIBIjANBgkq
//   hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsSKksJcuQbZm/cw67JJkHvlzrzd3+aPL
//   hfqy/FCKj/BmZ7mBZf0s3+89O0rOamsZP1NKzOE29ZL6ONLJHxU48LUbGciZupm/
//   wf7dY/Av34uDcZ61ufKz0u17UTxgjLULIWBy//68EOr4Xbm/4bqhmKcB3CclMaom
//   0LWeCrqittiLqunVCjFIbxXMT010WiBBnFwqjUqfuMnVLL+HrPPqgPqNhiKDdxBx
//   Hk9GDPq2+GEruM1jw7TUjVa+zbhekvdNTbj2Fo2sqf+mIkFLSaS6cHg0UeL7sX0w
//   vQFDMwx+hpfRLMcYpFAmRMn3dI2zUnPgwvWeKHrnNOjHVkRTV4hgZQIDAQABo1Aw
//   TjAdBgNVHQ4EFgQU85bt1wVl/f2LftBu1jeO499VUbYwHwYDVR0jBBgwFoAU85bt
//   1wVl/f2LftBu1jeO499VUbYwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQsFAAOC
//   AQEApenCY36LGThXLAIRIvDQ6XnHELL7Wm53m3tHy+GA2MxUbcTqQC3tgXM+yC18
//   EstjRHgWdQMtOcq9ohb5/TqWPoYAYnbg1SG9jEHJ3LLaIMI0idYo+zfPCtwliHLn
//   suZXH6ZU3mh/IQEBqINini6R/cSh9BpIjqwXKpjWoegl9XLI/RQ7Bbbya89TUBwm
//   5KR3deWXdMZEj/d7hV8XdSWyi2CvWTeHIfkZVhcHg1ues9+Mt3kaBr4Z5/NkQPAN
//   jfMdKjZ8tfNTN7PgYAYyRW6C8aXcw+w0zIoGrcO2gVM9/3oR4gHm5MUHOMdAyONk
//   g59+T+7NDlN7y4YmVIZQBgHByA==
//   -----END CERTIFICATE-----`;
//   var verified = false;

//   let jwt = searchParams.get("id_token");
// //   useEffect(() => {
// //     // if (verified) navigate("/");
// //   }, [navigate, verified]);

//   if (jwt) {
//     var jwtBuilder = new JWTBuilder();
//     jwtBuilder.parseJwt(jwt);
//     jwtBuilder.setSecret(cert);
//     try {
//       verified = jwtBuilder.verifyJwt();
//     } catch (error) {
//       console.error(error);
//     }
//     if (verified) {
//       let user = jwtBuilder.getPayload();
//     //   dispatch({ type: "user/addUser", payload: user });
//     console.log(user)
//     }
//   }

//   function sso() {
//     window.location.href =
//       "https://login.xecurify.com/moas/broker/login/jwt/299490?client_id=ffneT4WAFhumZQ6o&redirect_uri=http://localhost:3000/login";
//   }

//   return (
//     <div>
//       <h2>Login</h2>
//       <button onClick={sso}>Single Sign On</button>
//     </div>
//   );
// };

// export default Login;