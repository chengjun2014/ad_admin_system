import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

const chartData = [];

var length = Mock.mock('@integer(7, 50)');
console.log('length...', length);
for(let i = 0; i < length; i++) {
  chartData.push(Mock.mock({
    date: Mock.Random.date(),
    val1: Mock.mock('@integer(60, 100)'),
    key1: 'Clicks',
    val2: Mock.mock('@integer(10, 100)'),
    key2: 'clickRate',
    val3: Mock.mock('@integer(120, 200)'),
    key3: 'Impressions',
    val4: Mock.mock('@integer(40, 150)'),
    key4: 'cost',
    val5: Mock.mock('@integer(5, 12)'),
    key5: 'cpa',
    val6: Mock.mock('@integer(8, 20)'),
    key6: 'cpc',
    val7: Mock.mock('@integer(4, 15)'),
    key7: 'cpm',
  })

  )
}

export { LoginUsers, Users, chartData };
