export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '633461dcd2f451073449b43c',
                  title: 'Sanity Studio',
                  name: 'portifolio-an-studio',
                  apiId: '4ec65947-d83d-458f-a3d6-20c5262331e1'
                },
                {
                  buildHookId: '633461dcac8df00b1a598ec7',
                  title: 'Portfolio Website',
                  name: 'portifolio-an',
                  apiId: '5332442c-55a4-4c72-8509-8fbc4ed40583'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anneanvo/portifolio--An',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portifolio-an.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
