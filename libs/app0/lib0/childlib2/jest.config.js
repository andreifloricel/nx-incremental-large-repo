module.exports = {
  name: 'app0-lib0-childlib2',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/app0/lib0/childlib2',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
