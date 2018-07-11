<template>
  <ve-tree :data="chartData"></ve-tree>
</template>

<script>
  const treeData = {
    name: 'f',
    value: 1,
    link: 'https://ele.me',
    children: [
      {
        name: 'a',
        value: 1,
        link: 'https://ele.me',
        children: [
          {
            name: 'a-a',
            link: 'https://ele.me',
            value: 2
          },
          {
            name: 'a-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'b',
        value: 1,
        link: 'https://ele.me',
        children: [
          {
            name: 'b-a',
            link: 'https://ele.me',
            value: 2
          },
          {
            name: 'b-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'c',
        value: 3,
        link: 'https://ele.me',
        children: [
          {
            name: 'c-a',
            link: 'https://ele.me',
            value: 4
          },
          {
            name: 'c-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'd',
        value: 3,
        link: 'https://ele.me',
        children: [
          {
            name: 'd-a',
            link: 'https://ele.me',
            value: 4
          },
          {
            name: 'd-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      }
    ]
  }
  export default {
    data() {
      return {
        chartData: {
          columns: ['name', 'value'],
          rows: [
            {
              name: 'tree1',
              value: [treeData]
            }
          ]
        }
      }
    }
  }
</script>