//
//  UserInputViewManager.m
//  ReactNative103
//
//  Created by Enrique Oriol on 15/7/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

//#import "UserInputViewManager.h"
#import "UserInputView.h"
#import <MapKit/MapKit.h>


#import "RCTViewManager.h"

@interface UserInputViewManager : RCTViewManager

@end


@implementation UserInputViewManager

//Declare it as a React Native Module
RCT_EXPORT_MODULE()

- (UIView *)view{

  return [[[NSBundle mainBundle] loadNibNamed:@"UserInputView" owner:nil options:nil] objectAtIndex:0];

}

@end
