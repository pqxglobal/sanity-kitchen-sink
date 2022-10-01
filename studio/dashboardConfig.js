export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6337a44529322c0cc32057f6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cojmev2p',
                  apiId: '3d762cd6-1af8-4d77-b245-465a28278ad3'
                },
                {
                  buildHookId: '6337a4450558fc111a238be6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-o5up1ibe',
                  apiId: 'c935909b-6771-4046-9b18-56242349451b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pqxglobal/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-o5up1ibe.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
