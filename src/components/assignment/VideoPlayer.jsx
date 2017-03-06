import React, {Component} from 'react';
import s from 'components/styles/index.scss';

class VideoPlayer extends Component {
  render() {
		return (
			<div className={s.videoContainer}>
        <div className={s.videoPlayer}>
  				<video controls autoPlay>
  					<source src="https://r4---sn-5uaeznzk.googlevideo.com/videoplayback?id=70a2bec57f13aaa3&itag=22&source=webdrive&requiressl=yes&ttl=transient&pl=19&ei=gJK8WMzSFcXHqwXPnJpw&mime=video/mp4&lmt=1471233876244785&ip=204.77.234.58&ipbits=0&expire=1488767680&sparams=ei,expire,id,ip,ipbits,itag,lmt,mime,mm,mn,ms,mv,pl,requiressl,source,ttl&signature=048404F83258DD1E83F932D4E4AB4383716042FF.3A003CE49BF30E5553FC2442F112F8F775A0F0A5&key=cms1&app=explorer&cnlup=MjA0Ljc3LjIzNC41OA&knvuk=TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTBfNSkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzU2LjAuMjkyNC44NyBTYWZhcmkvNTM3LjM2&cms_redirect=yes&mm=31&mn=sn-5uaeznzk&ms=au&mt=1488759564&mv=m" type="video/mp4" />
  				</video>
        </div>
			</div>
		);
	}
}

export default VideoPlayer;
