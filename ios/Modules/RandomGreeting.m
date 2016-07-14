//
//  RandomGreeting.m
//  ReactNative103
//
//  Created by Enrique Oriol on 14/7/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RandomGreeting.h"
#import "RCTLog.h"


static NSArray *_greetings;


@implementation RandomGreeting


  //Declare that it is a React Native Module
  RCT_EXPORT_MODULE()


  //initialize private data
  + (void)initialize{
    _greetings = @[
                @"Hey %@, whats up bro",
                @"Welcome %@ %@",
                @"Come on! Mr %@ %@ is here",
                @"Ladies & Gentelmen, here is %@ %@",
                @"Ey dude!"];
  }


  //private method to get random greetings
  + (NSString *)randomGreeting:(NSString *)firstName lastName:(NSString *)lastName
  {
    NSString* random = [_greetings objectAtIndex:arc4random()%[_greetings count]];
    return [NSString stringWithFormat:random, firstName, lastName];
  };


  //export method sayFirstName
  RCT_EXPORT_METHOD( sayFirstName:(NSString *)firstName lastName:(NSString *)lastName )
  {
    RCTLogInfo([RandomGreeting randomGreeting:firstName lastName:lastName]);
  }


  //export method with custom name (say), firstName and lastName arguments and return a promise
  RCT_REMAP_METHOD(say, firstName:(NSString *)firstName lastName:(NSString *)lastName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock) reject )
  {
    NSString* greeting = [RandomGreeting randomGreeting:firstName lastName:lastName];
    resolve(greeting);
  }


@end
