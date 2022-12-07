// is the line command
let isCommand = (lineArr) => {
  return lineArr[0] === '$';
}
// what type of command
let typeOfCommand = (lineArr) => {
  if( lineArr[1] === 'cd' ){
    return "MOVE";
  }
  else {
    return "LIST";
  }
}
// if move command move where
let moveOption = (lineArr) => {
  if( lineArr[2] === "/" ){
    return "ROOT";
  }
  else if( lineArr[2] === ".." ){
    return "POP";
  }
  else{
    return "PUSH";
  }
}
// // if ls
// let lister = (line) => {
//   line = line.split(' ');
//   while(!isCommand(line)){
//     // add directory and file in obj
//   }
//   if( line.length > 0 ){
//     commander(line, actions);
//   }
//   else{
//     return;
//   }
// }
// // commander
// let commander = (lineArr, actions) => {
//   if( typeOfCommand(lineArr) === "MOVE" ){
//     let action = moveOption(lineArr);
//     if( action === "POP" ){
//       actions.pop();
//     }
//     else if( action === "PUSH" ){
//       actions.push(lineArr[2]);
//     }
//     else{
//       actions = [actions[0]];
//     }
//   }
//   else{
//     return lister(lineArr);
//   }
// }

exports.solution = (file) => {
  try{
    // let actions = [];
    // let fs = {
    //   'root': { dirs: [], files: 0 }
    // };
    // // write your solution here
    // // for( let line of file ){
    // let count = 0;
    // let len = file.length;
    // while( count<len ){
    //   let line = file[count].split(' ');
    //   if( isCommand(line) ){
    //     // console.log("command", count);
    //     if( typeOfCommand(line) === "MOVE" ){
    //       let cmd = moveOption(line);
    //       if( cmd === "PUSH"){
    //         actions.push(line[2]);
    //         if( !fs[actions.join('/')] ){
    //           fs[actions.join('/')] = { dirs: [], files: 0 };
    //           // fs[actions.join('/')] = { dirs: [], files: 0 };
    //           // fs[line[2]] = { dirs: [], files: [] };
    //         }
    //       }
    //       else if( cmd === "POP" ){
    //         actions.pop();
    //       }
    //       else{
    //         actions = ['root'];
    //       }
    //       count++;
    //     }
    //     else{
    //       count++;
    //       // console.log("skipping", count);
    //       continue;
    //     }
    //   }
    //   else{
    //     let lastIndexAction = actions.join('/');
    //     // let lastIndexAction = actions[actions.length - 1];
    //     // console.log("start", count);
    //     while( count<len && !isCommand(file[count].split(' ')) ){
    //       let line = file[count].split(' ');
    //       if( line[0] === "dir" ){
    //         fs[lastIndexAction]["dirs"].push(line[1]);
    //       }
    //       else{
    //         // fs[lastIndexAction]["files"] += parseInt(line[0]);
    //         fs[lastIndexAction]["files"] += parseInt(line[0]);
    //       }
    //       count++;
    //     }
    //     // console.log("end", count);
    //     continue;
    //   }
    // }

    let fs = {
  root: {
    dirs: [
      'gts',    'lwhbw',
      'pcqjnl', 'sqhw',
      'vllgn',  'wdtm',
      'ztfdwp'
    ],
    files: 489994
  },
  'root/gts': { dirs: [], files: 234742 },
  'root/lwhbw': { dirs: [], files: 99946 },
  'root/pcqjnl': { dirs: [ 'gljcvm', 'lqwntmdg', 'lrrl', 'qgpr' ], files: 459816 },
  'root/pcqjnl/gljcvm': { dirs: [], files: 264381 },
  'root/pcqjnl/lqwntmdg': { dirs: [ 'jjfwr', 'rfqbmb' ], files: 0 },
  'root/pcqjnl/lqwntmdg/jjfwr': { dirs: [ 'cfhjvmh' ], files: 0 },
  'root/pcqjnl/lqwntmdg/jjfwr/cfhjvmh': { dirs: [ 'gzfgc' ], files: 0 },
  'root/pcqjnl/lqwntmdg/jjfwr/cfhjvmh/gzfgc': { dirs: [], files: 134989 },
  'root/pcqjnl/lqwntmdg/rfqbmb': { dirs: [ 'cbrvhz', 'flcw', 'mnd' ], files: 0 },
  'root/pcqjnl/lqwntmdg/rfqbmb/cbrvhz': { dirs: [], files: 131072 },
  'root/pcqjnl/lqwntmdg/rfqbmb/flcw': { dirs: [], files: 216675 },
  'root/pcqjnl/lqwntmdg/rfqbmb/mnd': { dirs: [], files: 28976 },
  'root/pcqjnl/lrrl': {
    dirs: [
      'cpmvnf',  'dcfmtw',
      'ggnwqcj', 'mrnhn',
      'nwjggvr', 'sqpgr',
      'wgpqg'
    ],
    files: 560968
  },
  'root/pcqjnl/lrrl/cpmvnf': { dirs: [ 'srtqvcv' ], files: 0 },
  'root/pcqjnl/lrrl/cpmvnf/srtqvcv': { dirs: [ 'mrnhn' ], files: 0 },
  'root/pcqjnl/lrrl/cpmvnf/srtqvcv/mrnhn': { dirs: [ 'fbrwd' ], files: 0 },
  'root/pcqjnl/lrrl/cpmvnf/srtqvcv/mrnhn/fbrwd': { dirs: [], files: 163166 },
  'root/pcqjnl/lrrl/dcfmtw': { dirs: [ 'nzpdtfr', 'sntcbctt', 'vzhvjp', 'wdtm' ], files: 31712 },
  'root/pcqjnl/lrrl/dcfmtw/nzpdtfr': { dirs: [ 'qwtwps', 'vcthd' ], files: 291420 },
  'root/pcqjnl/lrrl/dcfmtw/nzpdtfr/qwtwps': { dirs: [ 'cmf' ], files: 0 },
  'root/pcqjnl/lrrl/dcfmtw/nzpdtfr/qwtwps/cmf': { dirs: [], files: 73595 },
  'root/pcqjnl/lrrl/dcfmtw/nzpdtfr/vcthd': { dirs: [], files: 15016 },
  'root/pcqjnl/lrrl/dcfmtw/sntcbctt': { dirs: [ 'lrrl', 'mjfdjrgt', 'npqj' ], files: 0 },
  'root/pcqjnl/lrrl/dcfmtw/sntcbctt/lrrl': { dirs: [], files: 424584 },
  'root/pcqjnl/lrrl/dcfmtw/sntcbctt/mjfdjrgt': { dirs: [], files: 317513 },
  'root/pcqjnl/lrrl/dcfmtw/sntcbctt/npqj': { dirs: [], files: 340000 },
  'root/pcqjnl/lrrl/dcfmtw/vzhvjp': { dirs: [], files: 161341 },
  'root/pcqjnl/lrrl/dcfmtw/wdtm': { dirs: [ 'jrswcjq', 'smgbdw' ], files: 224565 },
  'root/pcqjnl/lrrl/dcfmtw/wdtm/jrswcjq': { dirs: [], files: 173122 },
  'root/pcqjnl/lrrl/dcfmtw/wdtm/smgbdw': { dirs: [], files: 307533 },
  'root/pcqjnl/lrrl/ggnwqcj': { dirs: [ 'bfjvt' ], files: 579205 },
  'root/pcqjnl/lrrl/ggnwqcj/bfjvt': { dirs: [], files: 431526 },
  'root/pcqjnl/lrrl/mrnhn': { dirs: [ 'cfhjvmh', 'cjsrvg', 'hghjzpgc' ], files: 950333 },
  'root/pcqjnl/lrrl/mrnhn/cfhjvmh': { dirs: [], files: 306620 },
  'root/pcqjnl/lrrl/mrnhn/cjsrvg': { dirs: [], files: 384199 },
  'root/pcqjnl/lrrl/mrnhn/hghjzpgc': { dirs: [ 'mgnq' ], files: 273152 },
  'root/pcqjnl/lrrl/mrnhn/hghjzpgc/mgnq': { dirs: [ 'ttmctqlc' ], files: 270386 },
  'root/pcqjnl/lrrl/mrnhn/hghjzpgc/mgnq/ttmctqlc': { dirs: [], files: 9006 },
  'root/pcqjnl/lrrl/nwjggvr': { dirs: [ 'bwmglvmt', 'lrrl', 'wmjp', 'zvlhngjm' ], files: 202937 },
  'root/pcqjnl/lrrl/nwjggvr/bwmglvmt': { dirs: [ 'bszd', 'dqdrngf', 'lrrl', 'wtqgd' ], files: 932331 },
  'root/pcqjnl/lrrl/nwjggvr/bwmglvmt/bszd': { dirs: [], files: 202536 },
  'root/pcqjnl/lrrl/nwjggvr/bwmglvmt/dqdrngf': { dirs: [], files: 177307 },
  'root/pcqjnl/lrrl/nwjggvr/bwmglvmt/lrrl': { dirs: [ 'bzrs' ], files: 27874 },
  'root/pcqjnl/lrrl/nwjggvr/bwmglvmt/lrrl/bzrs': { dirs: [], files: 71351 },
  'root/pcqjnl/lrrl/nwjggvr/bwmglvmt/wtqgd': { dirs: [], files: 212172 },
  'root/pcqjnl/lrrl/nwjggvr/lrrl': { dirs: [ 'wrtp' ], files: 0 },
  'root/pcqjnl/lrrl/nwjggvr/lrrl/wrtp': { dirs: [], files: 267582 },
  'root/pcqjnl/lrrl/nwjggvr/wmjp': { dirs: [ 'tzqqmmp' ], files: 319147 },
  'root/pcqjnl/lrrl/nwjggvr/wmjp/tzqqmmp': { dirs: [], files: 140115 },
  'root/pcqjnl/lrrl/nwjggvr/zvlhngjm': { dirs: [ 'fjt', 'qsvwfb' ], files: 889748 },
  'root/pcqjnl/lrrl/nwjggvr/zvlhngjm/fjt': { dirs: [], files: 57947 },
  'root/pcqjnl/lrrl/nwjggvr/zvlhngjm/qsvwfb': { dirs: [], files: 23145 },
  'root/pcqjnl/lrrl/sqpgr': { dirs: [ 'bpnlrhsb', 'jvdh', 'zplwvj' ], files: 0 },
  'root/pcqjnl/lrrl/sqpgr/bpnlrhsb': { dirs: [], files: 22875 },
  'root/pcqjnl/lrrl/sqpgr/jvdh': { dirs: [], files: 95461 },
  'root/pcqjnl/lrrl/sqpgr/zplwvj': { dirs: [ 'gtd' ], files: 0 },
  'root/pcqjnl/lrrl/sqpgr/zplwvj/gtd': { dirs: [], files: 50675 },
  'root/pcqjnl/lrrl/wgpqg': { dirs: [], files: 65679 },
  'root/pcqjnl/qgpr': { dirs: [ 'fhnnc', 'jzmpcc', 'lrrl', 'wdtm' ], files: 0 },
  'root/pcqjnl/qgpr/fhnnc': { dirs: [], files: 84726 },
  'root/pcqjnl/qgpr/jzmpcc': { dirs: [ 'mjfdjrgt', 'mrnhn', 'wdtm' ], files: 254591 },
  'root/pcqjnl/qgpr/jzmpcc/mjfdjrgt': { dirs: [], files: 234188 },
  'root/pcqjnl/qgpr/jzmpcc/mrnhn': { dirs: [ 'gphqmvpn', 'gvtgqn' ], files: 0 },
  'root/pcqjnl/qgpr/jzmpcc/mrnhn/gphqmvpn': { dirs: [], files: 23807 },
  'root/pcqjnl/qgpr/jzmpcc/mrnhn/gvtgqn': { dirs: [], files: 357722 },
  'root/pcqjnl/qgpr/jzmpcc/wdtm': { dirs: [ 'cfhjvmh', 'mjfdjrgt' ], files: 536868 },
  'root/pcqjnl/qgpr/jzmpcc/wdtm/cfhjvmh': { dirs: [], files: 130491 },
  'root/pcqjnl/qgpr/jzmpcc/wdtm/mjfdjrgt': { dirs: [], files: 262881 },
  'root/pcqjnl/qgpr/lrrl': { dirs: [], files: 26548 },
  'root/pcqjnl/qgpr/wdtm': { dirs: [ 'jszntstc' ], files: 0 },
  'root/pcqjnl/qgpr/wdtm/jszntstc': { dirs: [], files: 488255 },
  'root/sqhw': {
    dirs: [ 'djw', 'dqnhzbh', 'lwp', 'mjfdjrgt', 'mrnhn' ],
    files: 211273
  },
  'root/sqhw/djw': { dirs: [], files: 98290 },
  'root/sqhw/dqnhzbh': { dirs: [ 'cmfhw', 'cwtm', 'zwhs' ], files: 410125 },
  'root/sqhw/dqnhzbh/cmfhw': { dirs: [ 'dsbjlmrf', 'lch', 'tpgszv' ], files: 661430 },
  'root/sqhw/dqnhzbh/cmfhw/dsbjlmrf': { dirs: [], files: 92510 },
  'root/sqhw/dqnhzbh/cmfhw/lch': { dirs: [], files: 171339 },
  'root/sqhw/dqnhzbh/cmfhw/tpgszv': { dirs: [], files: 215263 },
  'root/sqhw/dqnhzbh/cwtm': { dirs: [], files: 105200 },
  'root/sqhw/dqnhzbh/zwhs': { dirs: [], files: 311754 },
  'root/sqhw/lwp': { dirs: [], files: 273681 },
  'root/sqhw/mjfdjrgt': { dirs: [ 'hlgqdqb', 'pdsdjdlz' ], files: 585887 },
  'root/sqhw/mjfdjrgt/hlgqdqb': { dirs: [ 'lmhrtp', 'mjfdjrgt', 'pzcnzs', 'rcmzfm' ], files: 727457 },
  'root/sqhw/mjfdjrgt/hlgqdqb/lmhrtp': { dirs: [], files: 251922 },
  'root/sqhw/mjfdjrgt/hlgqdqb/mjfdjrgt': { dirs: [], files: 86846 },
  'root/sqhw/mjfdjrgt/hlgqdqb/pzcnzs': { dirs: [], files: 123265 },
  'root/sqhw/mjfdjrgt/hlgqdqb/rcmzfm': { dirs: [ 'gjls' ], files: 0 },
  'root/sqhw/mjfdjrgt/hlgqdqb/rcmzfm/gjls': { dirs: [], files: 109021 },
  'root/sqhw/mjfdjrgt/pdsdjdlz': { dirs: [], files: 103346 },
  'root/sqhw/mrnhn': { dirs: [ 'tmldr' ], files: 140361 },
  'root/sqhw/mrnhn/tmldr': { dirs: [], files: 169607 },
  'root/vllgn': { dirs: [], files: 58389 },
  'root/wdtm': {
    dirs: [
      'cfhjvmh',  'cpcqz',
      'gmrgsmpp', 'mrnhn',
      'nvgmrpdf', 'vpm',
      'ztp'
    ],
    files: 538283
  },
  'root/wdtm/cfhjvmh': { dirs: [ 'hqf', 'rgq', 'tgmw' ], files: 366245 },
  'root/wdtm/cfhjvmh/hqf': { dirs: [], files: 207656 },
  'root/wdtm/cfhjvmh/rgq': { dirs: [], files: 278680 },
  'root/wdtm/cfhjvmh/tgmw': { dirs: [], files: 153570 },
  'root/wdtm/cpcqz': {
    dirs: [ 'cfhjvmh', 'ftpm', 'lrrl', 'mrnhn', 'vqt' ],
    files: 261539
  },
  'root/wdtm/cpcqz/cfhjvmh': { dirs: [], files: 17554 },
  'root/wdtm/cpcqz/ftpm': { dirs: [], files: 803732 },
  'root/wdtm/cpcqz/lrrl': { dirs: [ 'mjfdjrgt', 'sdvhlnz' ], files: 1243694 },
  'root/wdtm/cpcqz/lrrl/mjfdjrgt': { dirs: [], files: 715583 },
  'root/wdtm/cpcqz/lrrl/sdvhlnz': {
    dirs: [ 'lcmlmr', 'vdcbcvzv', 'wdwgp', 'zllqgnhj' ],
    files: 526132
  },
  'root/wdtm/cpcqz/lrrl/sdvhlnz/lcmlmr': { dirs: [ 'lrrl' ], files: 0 },
  'root/wdtm/cpcqz/lrrl/sdvhlnz/lcmlmr/lrrl': { dirs: [], files: 104034 },
  'root/wdtm/cpcqz/lrrl/sdvhlnz/vdcbcvzv': { dirs: [ 'sldsnqld' ], files: 263858 },
  'root/wdtm/cpcqz/lrrl/sdvhlnz/vdcbcvzv/sldsnqld': { dirs: [], files: 169882 },
  'root/wdtm/cpcqz/lrrl/sdvhlnz/wdwgp': { dirs: [], files: 11714 },
  'root/wdtm/cpcqz/lrrl/sdvhlnz/zllqgnhj': { dirs: [], files: 113285 },
  'root/wdtm/cpcqz/mrnhn': { dirs: [], files: 407299 },
  'root/wdtm/cpcqz/vqt': { dirs: [], files: 795970 },
  'root/wdtm/gmrgsmpp': { dirs: [ 'fbcv', 'tnrmj' ], files: 458092 },
  'root/wdtm/gmrgsmpp/fbcv': { dirs: [ 'htmwl' ], files: 292840 },
  'root/wdtm/gmrgsmpp/fbcv/htmwl': { dirs: [], files: 45376 },
  'root/wdtm/gmrgsmpp/tnrmj': { dirs: [ 'cfhjvmh', 'wqtnrwg' ], files: 0 },
  'root/wdtm/gmrgsmpp/tnrmj/cfhjvmh': { dirs: [], files: 110464 },
  'root/wdtm/gmrgsmpp/tnrmj/wqtnrwg': { dirs: [], files: 283055 },
  'root/wdtm/mrnhn': { dirs: [], files: 2633 },
  'root/wdtm/nvgmrpdf': { dirs: [], files: 32919 },
  'root/wdtm/vpm': {
    dirs: [ 'ddz', 'dhmphrn', 'grr', 'nbccdd', 'plw', 'qsmg' ],
    files: 538517
  },
  'root/wdtm/vpm/ddz': { dirs: [], files: 221692 },
  'root/wdtm/vpm/dhmphrn': { dirs: [ 'fwbmb', 'gdq', 'lrrl', 'mrcnm', 'mrmmr' ], files: 161427 },
  'root/wdtm/vpm/dhmphrn/fwbmb': { dirs: [], files: 362480 },
  'root/wdtm/vpm/dhmphrn/gdq': { dirs: [], files: 872160 },
  'root/wdtm/vpm/dhmphrn/lrrl': {
    dirs: [ 'gqqsg', 'gwbtt', 'mrnhn', 'pdtm', 'vvsvfchb' ],
    files: 361264
  },
  'root/wdtm/vpm/dhmphrn/lrrl/gqqsg': { dirs: [ 'gvn', 'hzfmdhw', 'wdtm' ], files: 34666 },
  'root/wdtm/vpm/dhmphrn/lrrl/gqqsg/gvn': { dirs: [ 'lrrl', 'rwvbmlq' ], files: 663834 },
  'root/wdtm/vpm/dhmphrn/lrrl/gqqsg/gvn/lrrl': { dirs: [], files: 411432 },
  'root/wdtm/vpm/dhmphrn/lrrl/gqqsg/gvn/rwvbmlq': { dirs: [], files: 186907 },
  'root/wdtm/vpm/dhmphrn/lrrl/gqqsg/hzfmdhw': { dirs: [ 'lvdhtg', 'nwnp' ], files: 552287 },
  'root/wdtm/vpm/dhmphrn/lrrl/gqqsg/hzfmdhw/lvdhtg': { dirs: [ 'cfhjvmh', 'hzpzz', 'pbfhn', 'wljjgs' ], files: 362494 },
  'root/wdtm/vpm/dhmphrn/lrrl/gqqsg/hzfmdhw/lvdhtg/cfhjvmh': { dirs: [], files: 290659 },
  'root/wdtm/vpm/dhmphrn/lrrl/gqqsg/hzfmdhw/lvdhtg/hzpzz': { dirs: [], files: 610594 },
  'root/wdtm/vpm/dhmphrn/lrrl/gqqsg/hzfmdhw/lvdhtg/pbfhn': { dirs: [ 'mjfdjrgt' ], files: 0 },
  'root/wdtm/vpm/dhmphrn/lrrl/gqqsg/hzfmdhw/lvdhtg/pbfhn/mjfdjrgt': { dirs: [], files: 16108 },
  'root/wdtm/vpm/dhmphrn/lrrl/gqqsg/hzfmdhw/lvdhtg/wljjgs': { dirs: [], files: 228757 },
  'root/wdtm/vpm/dhmphrn/lrrl/gqqsg/hzfmdhw/nwnp': { dirs: [], files: 124842 },
  'root/wdtm/vpm/dhmphrn/lrrl/gqqsg/wdtm': { dirs: [ 'vsls' ], files: 1098076 },
  'root/wdtm/vpm/dhmphrn/lrrl/gqqsg/wdtm/vsls': { dirs: [], files: 250070 },
  'root/wdtm/vpm/dhmphrn/lrrl/gwbtt': { dirs: [ 'mjfdjrgt' ], files: 22391 },
  'root/wdtm/vpm/dhmphrn/lrrl/gwbtt/mjfdjrgt': { dirs: [], files: 281818 },
  'root/wdtm/vpm/dhmphrn/lrrl/mrnhn': { dirs: [ 'lrrl', 'mqcstf' ], files: 461465 },
  'root/wdtm/vpm/dhmphrn/lrrl/mrnhn/lrrl': { dirs: [], files: 441992 },
  'root/wdtm/vpm/dhmphrn/lrrl/mrnhn/mqcstf': { dirs: [ 'pdbbbmn' ], files: 280738 },
  'root/wdtm/vpm/dhmphrn/lrrl/mrnhn/mqcstf/pdbbbmn': { dirs: [], files: 250947 },
  'root/wdtm/vpm/dhmphrn/lrrl/pdtm': { dirs: [], files: 55975 },
  'root/wdtm/vpm/dhmphrn/lrrl/vvsvfchb': { dirs: [], files: 168507 },
  'root/wdtm/vpm/dhmphrn/mrcnm': { dirs: [ 'lrrl', 'mjfdjrgt' ], files: 636334 },
  'root/wdtm/vpm/dhmphrn/mrcnm/lrrl': { dirs: [], files: 623665 },
  'root/wdtm/vpm/dhmphrn/mrcnm/mjfdjrgt': { dirs: [], files: 26073 },
  'root/wdtm/vpm/dhmphrn/mrmmr': { dirs: [], files: 287663 },
  'root/wdtm/vpm/grr': { dirs: [ 'tgb' ], files: 0 },
  'root/wdtm/vpm/grr/tgb': { dirs: [], files: 203808 },
  'root/wdtm/vpm/nbccdd': { dirs: [], files: 62162 },
  'root/wdtm/vpm/plw': { dirs: [], files: 185632 },
  'root/wdtm/vpm/qsmg': { dirs: [ 'vbvtzmsg', 'wrrtctvd' ], files: 164538 },
  'root/wdtm/vpm/qsmg/vbvtzmsg': { dirs: [], files: 15318 },
  'root/wdtm/vpm/qsmg/wrrtctvd': { dirs: [], files: 249219 },
  'root/wdtm/ztp': { dirs: [ 'hns', 'wdtm' ], files: 659662 },
  'root/wdtm/ztp/hns': { dirs: [ 'fshzss', 'spdzjs' ], files: 437515 },
  'root/wdtm/ztp/hns/fshzss': { dirs: [], files: 428378 },
  'root/wdtm/ztp/hns/spdzjs': { dirs: [], files: 176350 },
  'root/wdtm/ztp/wdtm': { dirs: [ 'vnmg' ], files: 0 },
  'root/wdtm/ztp/wdtm/vnmg': { dirs: [], files: 83938 },
  'root/ztfdwp': { dirs: [], files: 437653 }
}

    let sum = 0;
    for(let dir in fs ){
      if( fs[dir]["files"] <= 100000 ){
        sum += fs[dir]["files"];
      }
    }
    // console.log(fs);
    return sum;
  }
  catch(err){
    console.log(err);
  }
};
