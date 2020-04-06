export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e8b14136e08802b72c6d306',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-p7wbdw4t',
                  apiId: '904ca8b1-2859-4c05-819a-1fcd70d61079'
                },
                {
                  buildHookId: '5e8b1414a579bba155c42dae',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-z6g3xnbf',
                  apiId: 'd0976462-2435-41fb-93e2-a7efb3702717'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jyoost/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-z6g3xnbf.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
