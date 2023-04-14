import TimelineSegment from '../../shared-components/TimelineSegment';
import styles from './AWS.module.css';
import React from 'react';

function AWS() {
  const AWSCert = (
    <img
      className={styles.awsImg}
      src="AWS-cloud-logo-white.png"
      alt="aws cloud practitioner cert"
    />
  );

  const AWSDesc =
    'I gained a hands on experience creating examples with Lambdas, api gateways, cognito, dynamodb, IAM, S3, cloudformation and EC2 instances. I have a clear understanding of how Cloud can be utilized, the multitude of uses, and the costs associated';

  return (
    <TimelineSegment
      time="Feb 2022"
      imageElement={AWSCert}
      title="AWS - Practitioner Certification"
      description={AWSDesc}
    ></TimelineSegment>
  );
}

export default AWS;
