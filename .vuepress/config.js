module.exports = {
  title: 'Open Services',
  description: 'Description of Open Services and a framework for operating them',
  themeConfig: {
    sidebarDepth: 2,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Framework Version 1', link: '/framework.v1/' },
      { text: 'Current Services', link: '/services/' }
    ],
    sidebar: {
      '/framework.v1/': [
        {
          title: 'Finance',
          collapsable: false,
          children: [
            'finance/automatic-expensing',
            'finance/efficiency-of-funds',
            'finance/public-history',
            'finance/self-funded',
            'finance/shutdown'
          ]
        },
        {
          title: 'Governance',
          collapsable: false,
          children: [
            'governance/governance',
            'governance/memberships',
            'governance/migration',
            'governance/transparency'
          ]
        },
        {
          title: 'Infrastructure',
          collapsable: false,
          children: [
            'infrastructure/automatic-infrastructure',
            'infrastructure/public-introspection',
            'infrastructure/secrets'
          ]
        },
        {
          title: 'Product',
          collapsable: false,
          children: [
            'product/compatibility',
            'product/export',
            'product/offline-first',
            'product/phases',
            'product/shutdown',
            'product/single-product-focus'
          ]
        }
      ]
    }
  }
}
