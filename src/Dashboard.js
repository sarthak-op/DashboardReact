import React from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import {models} from "powerbi-client";
import './App.css';

export default function Dashboard() {
  return (
    <div className="iframe-container">
      
      <iframe title="RPA" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=6ca2a612-5515-4682-bf8f-e4efb0b95924&appId=3164e371-51f3-4ac1-b127-dd078bb31c16&autoAuth=true&ctid=0ae51e19-07c8-4e4b-bb6d-648ee58410f4" frameborder="0" allowFullScreen="true"></iframe>     

      {/* <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual and qna
          id: "aa9c988f-85a6-4849-bbee-bdfc938dd7ce",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=aa9c988f-85a6-4849-bbee-bdfc938dd7ce&groupId=f5b379d7-3594-48bf-9e0b-2b69c9fc8811&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1MLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFF1ZXJ5RGF0YVNhYVNFbWJlZCI6dHJ1ZSwic2tpcFF1ZXJ5RGF0YVBhYVNFbWJlZCI6dHJ1ZSwic2tpcFF1ZXJ5RGF0YUV4cG9ydFRvIjp0cnVlfX0%3d",
          accessToken:
          "7593be75-4b4e-4d9d-a3f2-307a16e1fcfd",
                    tokenType: models.TokenType.Embed,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
            background: models.BackgroundType.Transparent,
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
              },
            ],
          ])
        }
        cssClassName={"dashboard"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      /> */}
    </div>
  );
}
