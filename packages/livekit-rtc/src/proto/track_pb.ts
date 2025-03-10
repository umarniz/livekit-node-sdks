// Copyright 2023 LiveKit, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.2.0 with parameter "target=ts,import_extension=js"
// @generated from file track.proto (package livekit.proto, syntax proto2)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { EncryptionType } from "./e2ee_pb.js";
import { file_e2ee } from "./e2ee_pb.js";
import type { FfiOwnedHandle } from "./handle_pb.js";
import { file_handle } from "./handle_pb.js";
import type { RtcStats } from "./stats_pb.js";
import { file_stats } from "./stats_pb.js";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file track.proto.
 */
export const file_track: GenFile = /*@__PURE__*/
  fileDesc("Cgt0cmFjay5wcm90bxINbGl2ZWtpdC5wcm90byI+ChdDcmVhdGVWaWRlb1RyYWNrUmVxdWVzdBIMCgRuYW1lGAEgAigJEhUKDXNvdXJjZV9oYW5kbGUYAiACKAQiRAoYQ3JlYXRlVmlkZW9UcmFja1Jlc3BvbnNlEigKBXRyYWNrGAEgAigLMhkubGl2ZWtpdC5wcm90by5Pd25lZFRyYWNrIj4KF0NyZWF0ZUF1ZGlvVHJhY2tSZXF1ZXN0EgwKBG5hbWUYASACKAkSFQoNc291cmNlX2hhbmRsZRgCIAIoBCJEChhDcmVhdGVBdWRpb1RyYWNrUmVzcG9uc2USKAoFdHJhY2sYASACKAsyGS5saXZla2l0LnByb3RvLk93bmVkVHJhY2siJwoPR2V0U3RhdHNSZXF1ZXN0EhQKDHRyYWNrX2hhbmRsZRgBIAIoBCIkChBHZXRTdGF0c1Jlc3BvbnNlEhAKCGFzeW5jX2lkGAEgAigEIlsKEEdldFN0YXRzQ2FsbGJhY2sSEAoIYXN5bmNfaWQYASACKAQSDQoFZXJyb3IYAiABKAkSJgoFc3RhdHMYAyADKAsyFy5saXZla2l0LnByb3RvLlJ0Y1N0YXRzIgwKClRyYWNrRXZlbnQiowIKFFRyYWNrUHVibGljYXRpb25JbmZvEgsKA3NpZBgBIAIoCRIMCgRuYW1lGAIgAigJEiYKBGtpbmQYAyACKA4yGC5saXZla2l0LnByb3RvLlRyYWNrS2luZBIqCgZzb3VyY2UYBCACKA4yGi5saXZla2l0LnByb3RvLlRyYWNrU291cmNlEhMKC3NpbXVsY2FzdGVkGAUgAigIEg0KBXdpZHRoGAYgAigNEg4KBmhlaWdodBgHIAIoDRIRCgltaW1lX3R5cGUYCCACKAkSDQoFbXV0ZWQYCSACKAgSDgoGcmVtb3RlGAogAigIEjYKD2VuY3J5cHRpb25fdHlwZRgLIAIoDjIdLmxpdmVraXQucHJvdG8uRW5jcnlwdGlvblR5cGUieQoVT3duZWRUcmFja1B1YmxpY2F0aW9uEi0KBmhhbmRsZRgBIAIoCzIdLmxpdmVraXQucHJvdG8uRmZpT3duZWRIYW5kbGUSMQoEaW5mbxgCIAIoCzIjLmxpdmVraXQucHJvdG8uVHJhY2tQdWJsaWNhdGlvbkluZm8inwEKCVRyYWNrSW5mbxILCgNzaWQYASACKAkSDAoEbmFtZRgCIAIoCRImCgRraW5kGAMgAigOMhgubGl2ZWtpdC5wcm90by5UcmFja0tpbmQSMAoMc3RyZWFtX3N0YXRlGAQgAigOMhoubGl2ZWtpdC5wcm90by5TdHJlYW1TdGF0ZRINCgVtdXRlZBgFIAIoCBIOCgZyZW1vdGUYBiACKAgiYwoKT3duZWRUcmFjaxItCgZoYW5kbGUYASACKAsyHS5saXZla2l0LnByb3RvLkZmaU93bmVkSGFuZGxlEiYKBGluZm8YAiACKAsyGC5saXZla2l0LnByb3RvLlRyYWNrSW5mbyI7ChVMb2NhbFRyYWNrTXV0ZVJlcXVlc3QSFAoMdHJhY2tfaGFuZGxlGAEgAigEEgwKBG11dGUYAiACKAgiJwoWTG9jYWxUcmFja011dGVSZXNwb25zZRINCgVtdXRlZBgBIAIoCCJBChhFbmFibGVSZW1vdGVUcmFja1JlcXVlc3QSFAoMdHJhY2tfaGFuZGxlGAEgAigEEg8KB2VuYWJsZWQYAiACKAgiLAoZRW5hYmxlUmVtb3RlVHJhY2tSZXNwb25zZRIPCgdlbmFibGVkGAEgAigIKj0KCVRyYWNrS2luZBIQCgxLSU5EX1VOS05PV04QABIOCgpLSU5EX0FVRElPEAESDgoKS0lORF9WSURFTxACKoEBCgtUcmFja1NvdXJjZRISCg5TT1VSQ0VfVU5LTk9XThAAEhEKDVNPVVJDRV9DQU1FUkEQARIVChFTT1VSQ0VfTUlDUk9QSE9ORRACEhYKElNPVVJDRV9TQ1JFRU5TSEFSRRADEhwKGFNPVVJDRV9TQ1JFRU5TSEFSRV9BVURJTxAEKkQKC1N0cmVhbVN0YXRlEhEKDVNUQVRFX1VOS05PV04QABIQCgxTVEFURV9BQ1RJVkUQARIQCgxTVEFURV9QQVVTRUQQAkIQqgINTGl2ZUtpdC5Qcm90bw", [file_e2ee, file_handle, file_stats]);

/**
 * Create a new VideoTrack from a VideoSource
 *
 * @generated from message livekit.proto.CreateVideoTrackRequest
 */
export type CreateVideoTrackRequest = Message<"livekit.proto.CreateVideoTrackRequest"> & {
  /**
   * @generated from field: required string name = 1;
   */
  name: string;

  /**
   * @generated from field: required uint64 source_handle = 2;
   */
  sourceHandle: bigint;
};

/**
 * Describes the message livekit.proto.CreateVideoTrackRequest.
 * Use `create(CreateVideoTrackRequestSchema)` to create a new message.
 */
export const CreateVideoTrackRequestSchema: GenMessage<CreateVideoTrackRequest> = /*@__PURE__*/
  messageDesc(file_track, 0);

/**
 * @generated from message livekit.proto.CreateVideoTrackResponse
 */
export type CreateVideoTrackResponse = Message<"livekit.proto.CreateVideoTrackResponse"> & {
  /**
   * @generated from field: required livekit.proto.OwnedTrack track = 1;
   */
  track?: OwnedTrack;
};

/**
 * Describes the message livekit.proto.CreateVideoTrackResponse.
 * Use `create(CreateVideoTrackResponseSchema)` to create a new message.
 */
export const CreateVideoTrackResponseSchema: GenMessage<CreateVideoTrackResponse> = /*@__PURE__*/
  messageDesc(file_track, 1);

/**
 * Create a new AudioTrack from a AudioSource
 *
 * @generated from message livekit.proto.CreateAudioTrackRequest
 */
export type CreateAudioTrackRequest = Message<"livekit.proto.CreateAudioTrackRequest"> & {
  /**
   * @generated from field: required string name = 1;
   */
  name: string;

  /**
   * @generated from field: required uint64 source_handle = 2;
   */
  sourceHandle: bigint;
};

/**
 * Describes the message livekit.proto.CreateAudioTrackRequest.
 * Use `create(CreateAudioTrackRequestSchema)` to create a new message.
 */
export const CreateAudioTrackRequestSchema: GenMessage<CreateAudioTrackRequest> = /*@__PURE__*/
  messageDesc(file_track, 2);

/**
 * @generated from message livekit.proto.CreateAudioTrackResponse
 */
export type CreateAudioTrackResponse = Message<"livekit.proto.CreateAudioTrackResponse"> & {
  /**
   * @generated from field: required livekit.proto.OwnedTrack track = 1;
   */
  track?: OwnedTrack;
};

/**
 * Describes the message livekit.proto.CreateAudioTrackResponse.
 * Use `create(CreateAudioTrackResponseSchema)` to create a new message.
 */
export const CreateAudioTrackResponseSchema: GenMessage<CreateAudioTrackResponse> = /*@__PURE__*/
  messageDesc(file_track, 3);

/**
 * @generated from message livekit.proto.GetStatsRequest
 */
export type GetStatsRequest = Message<"livekit.proto.GetStatsRequest"> & {
  /**
   * @generated from field: required uint64 track_handle = 1;
   */
  trackHandle: bigint;
};

/**
 * Describes the message livekit.proto.GetStatsRequest.
 * Use `create(GetStatsRequestSchema)` to create a new message.
 */
export const GetStatsRequestSchema: GenMessage<GetStatsRequest> = /*@__PURE__*/
  messageDesc(file_track, 4);

/**
 * @generated from message livekit.proto.GetStatsResponse
 */
export type GetStatsResponse = Message<"livekit.proto.GetStatsResponse"> & {
  /**
   * @generated from field: required uint64 async_id = 1;
   */
  asyncId: bigint;
};

/**
 * Describes the message livekit.proto.GetStatsResponse.
 * Use `create(GetStatsResponseSchema)` to create a new message.
 */
export const GetStatsResponseSchema: GenMessage<GetStatsResponse> = /*@__PURE__*/
  messageDesc(file_track, 5);

/**
 * @generated from message livekit.proto.GetStatsCallback
 */
export type GetStatsCallback = Message<"livekit.proto.GetStatsCallback"> & {
  /**
   * @generated from field: required uint64 async_id = 1;
   */
  asyncId: bigint;

  /**
   * @generated from field: optional string error = 2;
   */
  error: string;

  /**
   * @generated from field: repeated livekit.proto.RtcStats stats = 3;
   */
  stats: RtcStats[];
};

/**
 * Describes the message livekit.proto.GetStatsCallback.
 * Use `create(GetStatsCallbackSchema)` to create a new message.
 */
export const GetStatsCallbackSchema: GenMessage<GetStatsCallback> = /*@__PURE__*/
  messageDesc(file_track, 6);

/**
 * @generated from message livekit.proto.TrackEvent
 */
export type TrackEvent = Message<"livekit.proto.TrackEvent"> & {
};

/**
 * Describes the message livekit.proto.TrackEvent.
 * Use `create(TrackEventSchema)` to create a new message.
 */
export const TrackEventSchema: GenMessage<TrackEvent> = /*@__PURE__*/
  messageDesc(file_track, 7);

/**
 * @generated from message livekit.proto.TrackPublicationInfo
 */
export type TrackPublicationInfo = Message<"livekit.proto.TrackPublicationInfo"> & {
  /**
   * @generated from field: required string sid = 1;
   */
  sid: string;

  /**
   * @generated from field: required string name = 2;
   */
  name: string;

  /**
   * @generated from field: required livekit.proto.TrackKind kind = 3;
   */
  kind: TrackKind;

  /**
   * @generated from field: required livekit.proto.TrackSource source = 4;
   */
  source: TrackSource;

  /**
   * @generated from field: required bool simulcasted = 5;
   */
  simulcasted: boolean;

  /**
   * @generated from field: required uint32 width = 6;
   */
  width: number;

  /**
   * @generated from field: required uint32 height = 7;
   */
  height: number;

  /**
   * @generated from field: required string mime_type = 8;
   */
  mimeType: string;

  /**
   * @generated from field: required bool muted = 9;
   */
  muted: boolean;

  /**
   * @generated from field: required bool remote = 10;
   */
  remote: boolean;

  /**
   * @generated from field: required livekit.proto.EncryptionType encryption_type = 11;
   */
  encryptionType: EncryptionType;
};

/**
 * Describes the message livekit.proto.TrackPublicationInfo.
 * Use `create(TrackPublicationInfoSchema)` to create a new message.
 */
export const TrackPublicationInfoSchema: GenMessage<TrackPublicationInfo> = /*@__PURE__*/
  messageDesc(file_track, 8);

/**
 * @generated from message livekit.proto.OwnedTrackPublication
 */
export type OwnedTrackPublication = Message<"livekit.proto.OwnedTrackPublication"> & {
  /**
   * @generated from field: required livekit.proto.FfiOwnedHandle handle = 1;
   */
  handle?: FfiOwnedHandle;

  /**
   * @generated from field: required livekit.proto.TrackPublicationInfo info = 2;
   */
  info?: TrackPublicationInfo;
};

/**
 * Describes the message livekit.proto.OwnedTrackPublication.
 * Use `create(OwnedTrackPublicationSchema)` to create a new message.
 */
export const OwnedTrackPublicationSchema: GenMessage<OwnedTrackPublication> = /*@__PURE__*/
  messageDesc(file_track, 9);

/**
 * @generated from message livekit.proto.TrackInfo
 */
export type TrackInfo = Message<"livekit.proto.TrackInfo"> & {
  /**
   * @generated from field: required string sid = 1;
   */
  sid: string;

  /**
   * @generated from field: required string name = 2;
   */
  name: string;

  /**
   * @generated from field: required livekit.proto.TrackKind kind = 3;
   */
  kind: TrackKind;

  /**
   * @generated from field: required livekit.proto.StreamState stream_state = 4;
   */
  streamState: StreamState;

  /**
   * @generated from field: required bool muted = 5;
   */
  muted: boolean;

  /**
   * @generated from field: required bool remote = 6;
   */
  remote: boolean;
};

/**
 * Describes the message livekit.proto.TrackInfo.
 * Use `create(TrackInfoSchema)` to create a new message.
 */
export const TrackInfoSchema: GenMessage<TrackInfo> = /*@__PURE__*/
  messageDesc(file_track, 10);

/**
 * @generated from message livekit.proto.OwnedTrack
 */
export type OwnedTrack = Message<"livekit.proto.OwnedTrack"> & {
  /**
   * @generated from field: required livekit.proto.FfiOwnedHandle handle = 1;
   */
  handle?: FfiOwnedHandle;

  /**
   * @generated from field: required livekit.proto.TrackInfo info = 2;
   */
  info?: TrackInfo;
};

/**
 * Describes the message livekit.proto.OwnedTrack.
 * Use `create(OwnedTrackSchema)` to create a new message.
 */
export const OwnedTrackSchema: GenMessage<OwnedTrack> = /*@__PURE__*/
  messageDesc(file_track, 11);

/**
 * Mute/UnMute a track
 *
 * @generated from message livekit.proto.LocalTrackMuteRequest
 */
export type LocalTrackMuteRequest = Message<"livekit.proto.LocalTrackMuteRequest"> & {
  /**
   * @generated from field: required uint64 track_handle = 1;
   */
  trackHandle: bigint;

  /**
   * @generated from field: required bool mute = 2;
   */
  mute: boolean;
};

/**
 * Describes the message livekit.proto.LocalTrackMuteRequest.
 * Use `create(LocalTrackMuteRequestSchema)` to create a new message.
 */
export const LocalTrackMuteRequestSchema: GenMessage<LocalTrackMuteRequest> = /*@__PURE__*/
  messageDesc(file_track, 12);

/**
 * @generated from message livekit.proto.LocalTrackMuteResponse
 */
export type LocalTrackMuteResponse = Message<"livekit.proto.LocalTrackMuteResponse"> & {
  /**
   * @generated from field: required bool muted = 1;
   */
  muted: boolean;
};

/**
 * Describes the message livekit.proto.LocalTrackMuteResponse.
 * Use `create(LocalTrackMuteResponseSchema)` to create a new message.
 */
export const LocalTrackMuteResponseSchema: GenMessage<LocalTrackMuteResponse> = /*@__PURE__*/
  messageDesc(file_track, 13);

/**
 * Enable/Disable a remote track
 *
 * @generated from message livekit.proto.EnableRemoteTrackRequest
 */
export type EnableRemoteTrackRequest = Message<"livekit.proto.EnableRemoteTrackRequest"> & {
  /**
   * @generated from field: required uint64 track_handle = 1;
   */
  trackHandle: bigint;

  /**
   * @generated from field: required bool enabled = 2;
   */
  enabled: boolean;
};

/**
 * Describes the message livekit.proto.EnableRemoteTrackRequest.
 * Use `create(EnableRemoteTrackRequestSchema)` to create a new message.
 */
export const EnableRemoteTrackRequestSchema: GenMessage<EnableRemoteTrackRequest> = /*@__PURE__*/
  messageDesc(file_track, 14);

/**
 * @generated from message livekit.proto.EnableRemoteTrackResponse
 */
export type EnableRemoteTrackResponse = Message<"livekit.proto.EnableRemoteTrackResponse"> & {
  /**
   * @generated from field: required bool enabled = 1;
   */
  enabled: boolean;
};

/**
 * Describes the message livekit.proto.EnableRemoteTrackResponse.
 * Use `create(EnableRemoteTrackResponseSchema)` to create a new message.
 */
export const EnableRemoteTrackResponseSchema: GenMessage<EnableRemoteTrackResponse> = /*@__PURE__*/
  messageDesc(file_track, 15);

/**
 * @generated from enum livekit.proto.TrackKind
 */
export enum TrackKind {
  /**
   * @generated from enum value: KIND_UNKNOWN = 0;
   */
  KIND_UNKNOWN = 0,

  /**
   * @generated from enum value: KIND_AUDIO = 1;
   */
  KIND_AUDIO = 1,

  /**
   * @generated from enum value: KIND_VIDEO = 2;
   */
  KIND_VIDEO = 2,
}

/**
 * Describes the enum livekit.proto.TrackKind.
 */
export const TrackKindSchema: GenEnum<TrackKind> = /*@__PURE__*/
  enumDesc(file_track, 0);

/**
 * @generated from enum livekit.proto.TrackSource
 */
export enum TrackSource {
  /**
   * @generated from enum value: SOURCE_UNKNOWN = 0;
   */
  SOURCE_UNKNOWN = 0,

  /**
   * @generated from enum value: SOURCE_CAMERA = 1;
   */
  SOURCE_CAMERA = 1,

  /**
   * @generated from enum value: SOURCE_MICROPHONE = 2;
   */
  SOURCE_MICROPHONE = 2,

  /**
   * @generated from enum value: SOURCE_SCREENSHARE = 3;
   */
  SOURCE_SCREENSHARE = 3,

  /**
   * @generated from enum value: SOURCE_SCREENSHARE_AUDIO = 4;
   */
  SOURCE_SCREENSHARE_AUDIO = 4,
}

/**
 * Describes the enum livekit.proto.TrackSource.
 */
export const TrackSourceSchema: GenEnum<TrackSource> = /*@__PURE__*/
  enumDesc(file_track, 1);

/**
 * @generated from enum livekit.proto.StreamState
 */
export enum StreamState {
  /**
   * @generated from enum value: STATE_UNKNOWN = 0;
   */
  STATE_UNKNOWN = 0,

  /**
   * @generated from enum value: STATE_ACTIVE = 1;
   */
  STATE_ACTIVE = 1,

  /**
   * @generated from enum value: STATE_PAUSED = 2;
   */
  STATE_PAUSED = 2,
}

/**
 * Describes the enum livekit.proto.StreamState.
 */
export const StreamStateSchema: GenEnum<StreamState> = /*@__PURE__*/
  enumDesc(file_track, 2);

