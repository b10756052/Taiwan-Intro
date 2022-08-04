import React from "react";
import NavTaiwanIcon from "../logo/Vector白.png";
import wrench from "../logo/wrench.png";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footerTop">
        {/* footer上區塊的左區塊 */}
        <div className="icon">
          <img src={NavTaiwanIcon} alt="NavTaiwanIcon" />
          <div className="homepageIconWord">
            <p className="english">Taiwan</p>
            <p className="chinese">島遊</p>
          </div>
        </div>
        {/* footer上區塊的右區塊 */}
        <div className="word">
          <table>
            <tr>
              <td>關於Taiwan島遊</td>
              <td>服務條款</td>
              <td>追蹤我們</td>
            </tr>
            <tr>
              <td>我們是誰</td>
              <td>隱私權政策</td>
              <td>Facebook</td>
            </tr>
            <tr>
              <td>加入我們</td>
              <td>FAQ</td>
              <td>Instagram</td>
            </tr>
            <tr>
              <td>聯繫我們</td>
              <td> </td>
              <td>Line</td>
            </tr>
          </table>
        </div>
      </div>
      {/* footer下區塊 */}
      <div className="footerBottom">
        <p>© Design by Zoe Kang | Made by Jay Su</p>
      </div>
    </div>
  );
};

export default Footer;
