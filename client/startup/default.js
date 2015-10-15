Meteor.startup(function () {
    if (!Session.get('notes')) {
        Session.setPersistent('notes', []);
    }
});

$.Velocity.RegisterEffect('transition.pushRightIn', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateX: ['0%', '100%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushLeftOut', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateX: ['-100%', '0%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushLeftIn', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateX: ['0%', '-100%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushRightOut', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateX: ['100%', '0%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});


Transitioner.transition({
    fromRoute: 'list',
    toRoute: 'note',
    velocityAnimation: {
        in: 'transition.pushRightIn',
        out: 'transition.pushLeftOut'
    }
});

Transitioner.transition({
    fromRoute: 'note',
    toRoute: 'list',
    velocityAnimation: {
        in: 'transition.pushLeftIn',
        out: 'transition.pushRightOut'
    }
});
  