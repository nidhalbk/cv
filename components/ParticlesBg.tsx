import ParticlesBg from 'particles-bg';
import React from 'react';

// const icon =
// eslint-disable-next-line max-len
//   'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KPHBhdGggZmlsbD0iIzQ0NDQ0NCIgZD0iTTE1LjIgNmwtMS4xLTAuMmMtMC4xLTAuMi0wLjEtMC40LTAuMi0wLjZsMC42LTAuOSAwLjUtMC43LTIuNi0yLjYtMC43IDAuNS0wLjkgMC42Yy0wLjItMC4xLTAuNC0wLjEtMC42LTAuMmwtMC4yLTEuMS0wLjItMC44aC0zLjZsLTAuMiAwLjgtMC4yIDEuMWMtMC4yIDAuMS0wLjQgMC4xLTAuNiAwLjJsLTAuOS0wLjYtMC43LTAuNC0yLjUgMi41IDAuNSAwLjcgMC42IDAuOWMtMC4yIDAuMi0wLjIgMC40LTAuMyAwLjZsLTEuMSAwLjItMC44IDAuMnYzLjZsMC44IDAuMiAxLjEgMC4yYzAuMSAwLjIgMC4xIDAuNCAwLjIgMC42bC0wLjYgMC45LTAuNSAwLjcgMi42IDIuNiAwLjctMC41IDAuOS0wLjZjMC4yIDAuMSAwLjQgMC4xIDAuNiAwLjJsMC4yIDEuMSAwLjIgMC44aDMuNmwwLjItMC44IDAuMi0xLjFjMC4yLTAuMSAwLjQtMC4xIDAuNi0wLjJsMC45IDAuNiAwLjcgMC41IDIuNi0yLjYtMC41LTAuNy0wLjYtMC45YzAuMS0wLjIgMC4yLTAuNCAwLjItMC42bDEuMS0wLjIgMC44LTAuMnYtMy42bC0wLjgtMC4yek0xNSA5bC0xLjcgMC4zYy0wLjEgMC41LTAuMyAxLTAuNiAxLjVsMC45IDEuNC0xLjQgMS40LTEuNC0wLjljLTAuNSAwLjMtMSAwLjUtMS41IDAuNmwtMC4zIDEuN2gtMmwtMC4zLTEuN2MtMC41LTAuMS0xLTAuMy0xLjUtMC42bC0xLjQgMC45LTEuNC0xLjQgMC45LTEuNGMtMC4zLTAuNS0wLjUtMS0wLjYtMS41bC0xLjctMC4zdi0ybDEuNy0wLjNjMC4xLTAuNSAwLjMtMSAwLjYtMS41bC0xLTEuNCAxLjQtMS40IDEuNCAwLjljMC41LTAuMyAxLTAuNSAxLjUtMC42bDAuNC0xLjdoMmwwLjMgMS43YzAuNSAwLjEgMSAwLjMgMS41IDAuNmwxLjQtMC45IDEuNCAxLjQtMC45IDEuNGMwLjMgMC41IDAuNSAxIDAuNiAxLjVsMS43IDAuM3YyeiI+PC9wYXRoPgo8cGF0aCBmaWxsPSIjNDQ0NDQ0IiBkPSJNOCA0LjVjLTEuOSAwLTMuNSAxLjYtMy41IDMuNXMxLjYgMy41IDMuNSAzLjUgMy41LTEuNiAzLjUtMy41YzAtMS45LTEuNi0zLjUtMy41LTMuNXpNOCAxMC41Yy0xLjQgMC0yLjUtMS4xLTIuNS0yLjVzMS4xLTIuNSAyLjUtMi41IDIuNSAxLjEgMi41IDIuNWMwIDEuNC0xLjEgMi41LTIuNSAyLjV6Ij48L3BhdGg+Cjwvc3ZnPgo=';
//
// const config = {
//   num: [1, 3],
//   rps: 0.1,
//   radius: [5, 40],
//   life: [1.5, 3],
//   v: [2, 3],
//   tha: [-50, 50],
//   alpha: [0.6, 0],
//   scale: [0.1, 0.5],
//   body: icon,
//   position: 'all',
//   color: ['random', '#ff0000'],
//   cross: 'dead',
//   random: 10,
//   rotate: 2,
//   // @ts-ignore
//   onParticleUpdate: (ctx, particle) => {
//     ctx.beginPath();
//
//     ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
//
//     ctx.fillStyle = particle.color;
//
//     ctx.fill();
//
//     ctx.closePath();
//   },
// };

// @ts-ignore
export default () => <ParticlesBg type="square" bg />;
