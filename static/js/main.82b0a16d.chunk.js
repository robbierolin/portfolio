(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(e,t,o){e.exports=o(306)},201:function(e,t,o){},202:function(e,t,o){},293:function(e,t,o){var n={"./01_TomatoCounting/info":83,"./01_TomatoCounting/info.json":83,"./01_TomatoCounting/video.mp4":294,"./02_VRMotionPerception/info":84,"./02_VRMotionPerception/info.json":84,"./02_VRMotionPerception/video.mp4":295,"./03_Eyetrack3d/info":85,"./03_Eyetrack3d/info.json":85,"./03_Eyetrack3d/video.mp4":296,"./04_GDVis/info":86,"./04_GDVis/info.json":86,"./04_GDVis/video.mp4":297,"./05_SpaceMotion/info":87,"./05_SpaceMotion/info.json":87,"./05_SpaceMotion/video.mp4":298,"./06_RobotFormationControl/info":88,"./06_RobotFormationControl/info.json":88,"./06_RobotFormationControl/video.mp4":299,"./07_StyleTransfer/info":89,"./07_StyleTransfer/info.json":89,"./07_StyleTransfer/video.mp4":300,"./08_Stabilization/info":90,"./08_Stabilization/info.json":90,"./08_Stabilization/video.mp4":301,"./09_VideoPanorama/info":91,"./09_VideoPanorama/info.json":91,"./09_VideoPanorama/video.mp4":302,"./10_VRJuggling/info":92,"./10_VRJuggling/info.json":92,"./10_VRJuggling/video.mp4":303,"./11_vart/info":93,"./11_vart/info.json":93,"./11_vart/video.mp4":304};function i(e){var t=a(e);return o(t)}function a(e){var t=n[e];if(!(t+1)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id=293},294:function(e,t,o){e.exports=o.p+"static/media/video.15838142.mp4"},295:function(e,t,o){e.exports=o.p+"static/media/video.4e596e7d.mp4"},296:function(e,t,o){e.exports=o.p+"static/media/video.465213fc.mp4"},297:function(e,t,o){e.exports=o.p+"static/media/video.33b92c40.mp4"},298:function(e,t,o){e.exports=o.p+"static/media/video.8a7f13d5.mp4"},299:function(e,t,o){e.exports=o.p+"static/media/video.ad8bf74b.mp4"},300:function(e,t,o){e.exports=o.p+"static/media/video.025dcf8f.mp4"},301:function(e,t,o){e.exports=o.p+"static/media/video.cd8d1d52.mp4"},302:function(e,t,o){e.exports=o.p+"static/media/video.00231b16.mp4"},303:function(e,t,o){e.exports=o.p+"static/media/video.ffd85aab.mp4"},304:function(e,t,o){e.exports=o.p+"static/media/video.1b04a590.mp4"},306:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o.n(n),a=o(30),r=o.n(a),c=(o(201),o(23)),s=o(24),l=o(26),p=o(25),m=o(27),d=(o(202),o(13)),u=o(11),f=o(94),v=o.n(f),h=function(e){function t(e){var o;return Object(c.a)(this,t),(o=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={hover:!1},o.toggleHover=function(){o.setState({hover:!o.state.hover})},o.classes=e,o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.hover,t=i.a.createElement(d.a,{shadow:5,className:this.classes.card},i.a.createElement(v.a,{url:this.props.video,width:"100%",height:"100%",playing:e,loop:!0,volume:0}),i.a.createElement(d.b,null,i.a.createElement(d.c,null,i.a.createElement(d.e,{gutterBottom:!0,variant:"h5",component:"h2"},this.props.info.name),i.a.createElement(d.e,{component:"p"},this.props.info.description))));return this.props.info.link.length>0?i.a.createElement("div",{onMouseEnter:this.toggleHover,onMouseLeave:this.toggleHover},i.a.createElement("a",{target:"_blank",href:this.props.info.link,style:{textDecoration:"none"}},t)):i.a.createElement("div",{onMouseEnter:this.toggleHover,onMouseLeave:this.toggleHover},t)}}]),t}(n.Component),g=Object(u.withStyles)({card:{},cardMedia:{}})(h);var b=function(e){var t={};return e.keys().map(function(o,n){var i=o.split("/"),a=i[1],r=i[2].split(".")[0];"undefined"==typeof t[a]&&(t[a]={}),t[a][r]=e(o)}),t}(o(293));function y(e,t,o){if(!(o>=t.length))return i.a.createElement(g,{video:e[t[o]].video,info:e[t[o]].info})}var _=3;var j=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(d.d,{container:!0,direction:"row",alignItems:"center",justify:"space-evenly",spacing:40,style:{paddingTop:50}},function(e){var t=[],o=Object.keys(e).sort();console.log(o);for(var n=0;n<o.length;n+=_){for(var a,r=[],c=0;c<_;c+=1)r.push(i.a.createElement(d.d,{item:!0,sm:!0},y(e,o,n+c)));a=i.a.createElement(i.a.Fragment,null,r),t.push(i.a.createElement(d.d,{container:!0,item:!0,xs:12,spacing:24},a))}return t}(b))}}]),t}(n.Component),k=o(309),x=o(308),E=function(){return i.a.createElement(k.a,null,i.a.createElement(x.a,{exact:!0,path:"/portfolio",component:j}))},w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"page"},i.a.createElement(E,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=o(307);r.a.render(i.a.createElement(O.a,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e){e.exports={name:"Tomato Counting and Ripeness Detection",description:"Developed and deployed tomato counting model for greenhouses in Canada and USA",link:"https://www.ecoation.com"}},84:function(e){e.exports={name:"VR Motion Perception",description:"Developed methods for enhancing perception of motion in VR",link:"https://open.library.ubc.ca/cIRcle/collections/ubctheses/24/items/1.0354558"}},85:function(e){e.exports={name:"Eyetrack3D",description:"A CNN to predict 3D gaze location from eye images",link:"https://github.com/robbierolin/eyetrack3d"}},86:function(e){e.exports={name:"GDVis",description:"d3.js visualization of music data for the band The Grateful Dead",link:"https://robbierolin.github.io/gdvis"}},87:function(e){e.exports={name:"Space Motion",description:"Feature detection/correspondance on RGBD video data to determine speed and rotation of floating objects",link:""}},88:function(e){e.exports={name:"Robot Formation Control",description:"Simulation environment and algorithms for robot fleets to reach a goal while avoiding obstacles and maintaining a formation",link:"https://github.com/robbierolin/robot-formation-control"}},89:function(e){e.exports={name:"Style Transfer",description:"Transfer style to videos or create stylized gifs from images",link:"https://github.com/robbierolin/cv/tree/master/style-transfer"}},90:function(e){e.exports={name:"Stabilization",description:"Stabilize a video",link:"https://github.com/robbierolin/cv/tree/master/stabilization"}},91:function(e){e.exports={name:"Video Panorama",description:"Create panoramas from videos or images",link:"https://github.com/robbierolin/cv/tree/master/panorama"}},92:function(e){e.exports={name:"VR Juggling",description:"Virtual reality juggling simulation",link:"https://www.oculus.com/experiences/rift/1410921775656351/"}},93:function(e){e.exports={name:"v.art",description:"Interactive virtual reality kinetic art gallery",link:"https://www.oculus.com/experiences/rift/1325000794283821/"}}},[[196,1,2]]]);
//# sourceMappingURL=main.82b0a16d.chunk.js.map