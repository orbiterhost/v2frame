console.log(JSON.stringify(
  {
    version: 'next',
    imageUrl: 'https://v2demo.orbiter.website/image.png',
    button: {
      title: 'Launch',
      action: {
        type: 'launch_frame',
        name: 'Launch',
        url: 'https://v2demo.orbiter.website',
        splashImageUrl: 'https://v2demo.orbiter.website/splash.png',
        splashBackgroundColor: '#ffffff'
      }
    }
  }
))
