import config from "/src/js/configs.json";

// export async function stringBack() {
//   const info = JSON.parse(JSON.stringify(config));
//   console.log(` ${info[0].codeSrc} `);
//   const mass = [];
//   // for(let i = 0; i < config.length; i++){
//   let homework = await import(info[0].codeSrc);
//   mass.push(homework);
//   // }
//   console.log(mass);
//   return mass;
// }

export const stringParse = () => {
  const info = JSON.parse(JSON.stringify(config));
  return new Promise((resolve) => {
    const mass = []
    let homework = import(info[0].codeSrc)
    mass.push(homework)
    console.log(mass);
    resolve(mass)
  });
};


//wher is main?

// index.js
// const myImport = async (path) => {
//     try {
//         return {
//             // Critical dependency: the request of a dependency is an expression
//             contents: await import(bundleName),
//             succeeded: true,
//         }
//     } catch (error) {
//         return {
//             error,
//             succeeded: false,
//         }
//     }
// };
