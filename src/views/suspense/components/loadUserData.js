export default function loadUserData(timeout = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Sheep',
        pic: 'https://raw.githubusercontent.com/SheepNDW/Bootstrap5-learning/main/img/rice.jpg',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nam quasi assumenda expedita quidem veritatis reiciendis iusto id voluptas voluptatem.'
      })
    }, timeout)
  })
}
